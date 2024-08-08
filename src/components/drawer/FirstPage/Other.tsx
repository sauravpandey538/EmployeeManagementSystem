"use client";
import React, { useState } from "react";
import { Check, Clock, User } from "lucide-react";
// shadcn component imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail } from "lucide-react";
import { useDispatch } from 'react-redux';
import { updateEmployeeData } from '@/lib/slices/formControl';
import { FormState } from "@/lib/slices/formControl";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// react-hook-form
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

type Option = {
    value: string;
    label: string;
    icon: React.ReactNode;
};

const options: Option[] = [
    { value: "PART-TIME", label: "PART-TIME", icon: <Clock /> },
    { value: "FULL-TIME", label: "FULL-TIME", icon: <User /> },
];

const Others: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { toast } = useToast();
    const dispatch = useDispatch();
    const form = useForm({
        defaultValues: {
            fullName: "",
            type: "",
            specialist: "",
            email: "",
            address: "",
        },
    });

    const handleButtonClick = (value: string, e: any) => {
        e.preventDefault();
        form.setValue("type", value); // Sync form value with state
        setSelectedValue(value);
        dispatch(updateEmployeeData({ field: "type", value })); // Dispatch individual update
    };

    const handleInputChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        form.setValue(field as any, value); // Sync form value with state
        dispatch(updateEmployeeData({ field, value })); // Dispatch individual update
    };

    const onSubmit = async (data: any) => {
        // This can be used for final submission if necessary
        setIsLoading(true);
        // You might want to perform some additional logic here
        setIsLoading(false);
        toast({ title: "Submitted!", description: "Your form was submitted successfully." });
    };

    return (
        <div className="flex max-w-screen-sm w-full p-5">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 w-full"
                >
                    {[
                        { label: "Type", name: "type", type: "text" },
                        { label: "FullName", name: "fullName", type: "text" },
                        { label: "Specialist", name: "specialist", type: "text" },
                        { label: "Email", name: "email", type: "text", icon: Mail },
                        { label: "Address", name: "address", type: "string", icon: MapPin },
                    ].map(({ label, name, type, icon: Icon }) => (
                        <FormField
                            key={label}
                            control={form.control}
                            name={name as any}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{label}</FormLabel>
                                    <FormControl className="w-full">
                                        {name === "type" ? (
                                            <div className="flex w-full justify-between items-center gap-2">
                                                {options.map((option) => (
                                                    <div
                                                        key={option.value}
                                                        className="flex items-center flex-1"
                                                    >
                                                        <Button
                                                            className={`flex gap-2 items-center ${selectedValue === option.value
                                                                ? "bg-blue-700 text-white"
                                                                : "bg-none text-black"
                                                                }`}
                                                            variant="outline"
                                                            onClick={(e) => handleButtonClick(option.value, e)}
                                                        >
                                                            {option.icon}
                                                            {option.label}
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : name === "specialist" ? (
                                            <Select
                                                onValueChange={(value) => {
                                                    field.onChange(value);
                                                    dispatch(updateEmployeeData({ field: "specialist", value }));
                                                }}
                                                value={field.value as string}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Choose Position" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Marketing Team">
                                                        Marketing Team
                                                    </SelectItem>
                                                    <SelectItem value="Development Team">
                                                        Development Team
                                                    </SelectItem>
                                                    <SelectItem value="Others">Others</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        ) : (
                                            <div className="relative flex items-center">
                                                <Input
                                                    {...field}
                                                    type={type}
                                                    onChange={handleInputChange(name as keyof FormState)}
                                                    className={` ${Icon ? 'pl-10' : ''}`} />
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


                </form>
            </Form>
        </div>
    );
};

export default Others;
