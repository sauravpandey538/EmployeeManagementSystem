'use client'
import React from "react";
import axios from 'axios';
// shadcn component
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


// react-hook-form
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast"
import FileUploader from "@/components/helpers/ImageInput";


const UpdateEmployee: React.FC = () => {
    const { toast } = useToast()

    const form = useForm({
        defaultValues: {
            employeeId: '',
            fullName: '',
            salary: '',
            facultyType: "Others",
            additionalInfo: '',
        }
    })
    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post("/api/insert-user", data)

            toast({
                title: "Success",
                description: response.data.message,
            })
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Error",
                description: error.response.data.message,
            })

        }


    }


    return (
        <div className=" flex min-h-screen max-w-screen justify-center items-center py-10 px-5">


            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-96 w-full">
                    {
                        [
                            { label: "Employee Phone number", name: "phoneNumber", type: "number" },
                            { label: " ", name: "showInputs", type: "text" },

                            { label: "Employee Linkedin address", name: "LinkedIn", type: "text" },


                        ].map(({ label, name, type }) => <>

                            {name === "showInputs" ? <FileUploader /> : <FormField
                                key={label}
                                control={form.control}

                                name={name as "employeeId" | "fullName" | "salary" | "facultyType" | "additionalInfo"}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{label}</FormLabel>
                                        <FormControl className=" w-full">
                                            <Input  {...field} type={type} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />}

                        </>)
                    }

                    <Button type="submit" className="w-full">Submit</Button>



                </form>
            </Form>
        </div>
    );
};

export default UpdateEmployee;
