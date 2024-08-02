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

//zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { createEmployeeSchema } from "@/zodSchemas/createEmployee";
// react-hook-form
import { useForm } from "react-hook-form";


const CreateEmployee: React.FC = () => {
    type Formdata = z.infer<typeof createEmployeeSchema>;

    const form = useForm<Formdata>({
        resolver: zodResolver(createEmployeeSchema),
        defaultValues: {
            employeeId: '',
            fullName: '',
            salary: 1,
            facultyType: "Others",
            additionalInfo: '',
        }
    })
    const onSubmit = async (data: Formdata) => {
        try {
            const response = await axios.post("/api/insert-user", data)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
        finally {
            console.log(data)
        }

    }


    return (
        <div className=" flex min-h-screen max-w-screen justify-center items-center py-10 px-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-96 w-full">
                    {
                        [
                            { label: "Employee Identification number", name: "employeeId", type: "text" },
                            { label: "Employee Full Name", name: "fullName", type: "text" },
                            { label: "Employee Faculty Type", name: "facultyType", type: "text" },
                            { label: "Employee Salary", name: "salary", type: "number" },
                            { label: "Additional Info", name: "additionalInfo", type: "string" },

                        ].map(({ label, name, type }) =>


                            <FormField
                                key={label}
                                control={form.control}

                                name={name as "employeeId" | "fullName" | "salary" | "facultyType" | "additionalInfo"}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{label}</FormLabel>
                                        <FormControl className=" w-full">
                                            {name === 'additionalInfo' ? (<Textarea placeholder="Extra information you want to add (optional)" {...field} />) :
                                                (name === 'facultyType' ?


                                                    <Select
                                                        onValueChange={(value) => field.onChange(value)}
                                                        value={field.value as string}
                                                    >
                                                        <SelectTrigger >
                                                            <SelectValue placeholder="Choose Position" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Marketing Team">Marketing Team</SelectItem>
                                                            <SelectItem value="Development Team">Development Team</SelectItem>
                                                            <SelectItem value="Others">Others</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    :
                                                    <Input  {...field} type={type}
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            field.onChange(name === 'salary' ? Number(value) : value);
                                                        }}
                                                    />)
                                            }

                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )
                    }

                    <Button type="submit" className="w-full">Submit</Button>



                </form>
            </Form>
        </div>
    );
};

export default CreateEmployee;
