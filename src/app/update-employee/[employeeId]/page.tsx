'use client';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { updateEmployeeSchema } from "@/zodSchemas/updateEmployee";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import FileUploader from "@/components/helpers/ImageInput";
import { useParams } from "next/navigation";
const UpdateEmployee = () => {
    const { toast } = useToast();
    const params = useParams()
    type Formdata = z.infer<typeof updateEmployeeSchema>;

    const form = useForm<Formdata>({
        resolver: zodResolver(updateEmployeeSchema),
        defaultValues: {
            email: '',
            employeeId: params.employeeId as string || '',  // Handle default value
            phoneNumber: '',
            linkedIn: '',
            image: undefined,
            cv: undefined,
        }
    });

    const onSubmit = async (data: Formdata) => {
        try {
            const response = await axios.post("/api/update-employee", data);
            toast({
                title: "Success",
                description: response.data.message,
            });
            console.log(response);
        } catch (error: any) {
            console.log(error);
            toast({
                variant: "destructive",
                title: "Error",
                description: error.response.data.message,
            });
        }
        console.log(data);
    };

    return (
        <div className="flex min-h-screen max-w-screen justify-center items-center py-10 px-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-96 w-full">
                    {[
                        { label: "Employee Email", name: "email", type: "text" },
                        { label: "Employee ID", name: "employeeId", type: "text", hidden: true },
                        { label: "Employee Phone number", name: "phoneNumber", type: "text" },
                        { label: "Employee LinkedIn address", name: "linkedIn", type: "text" },
                    ].map(({ label, name, type, hidden }, index) => (
                        <FormField
                            key={index}
                            control={form.control}
                            name={name as keyof Formdata}
                            render={({ field }) => (
                                <FormItem hidden={!!hidden}>
                                    <FormLabel>{label}</FormLabel>
                                    <FormControl className="w-full">
                                        <Input {...field as any} type={type} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}

                    <FileUploader />

                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default UpdateEmployee;
