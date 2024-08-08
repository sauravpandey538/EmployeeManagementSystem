"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";
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
import DateData from "./Date";

const DataInfo = () => {
    const [infoText, setInfoText] = useState<string>("");
    const [infoCount, setInfoCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { toast } = useToast();

    const form = useForm({
        defaultValues: {
            phoneNumber: '',
            info: ''
        },
    });

    const onSubmit = async (data: any) => {
        console.log("Form data:", data);
        // Add submission logic here
    };

    const handleInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        setInfoText(newText);
    };

    useEffect(() => {
        setInfoCount(infoText.length);
    }, [infoText]);

    return (
        <div className="flex flex-col gap-3 max-w-screen-sm w-full p-5">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 w-full"
                >
                    {[
                        { label: "Phone Number", name: "phoneNumber", type: "number", icon: Phone },
                        { label: "Information", name: "info", type: "text" },
                    ].map(({ label, name, type, icon: Icon }) => (
                        <FormField
                            key={name}
                            control={form.control}
                            name={name as any}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex justify-between items-center">
                                        {label}
                                        {name === 'info' && <p>{infoCount}/100</p>}
                                    </FormLabel>
                                    <FormControl className="w-full">
                                        {name === 'info' ? (
                                            <Textarea
                                                {...field}
                                                // value={field.value || ""}
                                                onChange={(e) => {
                                                    field.onChange(e);
                                                    handleInfoChange(e);
                                                }}
                                                placeholder="e.g., He has strong expertise in front-end development."
                                            />
                                        ) : (
                                            <div className="relative flex items-center">
                                                <Input
                                                    {...field}
                                                    type={type}
                                                    placeholder="e.g., 9898989898"
                                                    className={`${Icon ? 'pl-12' : ''}`}
                                                />
                                                {Icon && (
                                                    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                                )}
                                            </div>
                                        )}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}

                    {/* <Button type="submit" className="w-full bg-blue-700">
                        {isLoading ? "Submitting..." : "Submit"}
                    </Button> */}
                </form>
            </Form>
            <DateData />
        </div>
    );
};

export default DataInfo;
