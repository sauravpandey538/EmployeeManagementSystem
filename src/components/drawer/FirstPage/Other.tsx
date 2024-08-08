"use client";
import React, { useState } from "react";
import axios from "axios";
import { Check, Clock, User } from "lucide-react";
// shadcn component
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Form,
    FormControl,
    FormDescription,
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
    const [selectedValue, setSelectedValue] = useState<string>("PART-TIME");

    const handleButtonClick = (value: string) => {
        setSelectedValue(value);
    };
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { toast } = useToast();

    const form = useForm({
        defaultValues: {
            imageUrl: "",
            cvUrl: "",
            fullName: "",
            type: "",
            specialist: "",
            email: "",
            address: "",
        },
    });
    const onSubmit = async (data: any) => {
        // setIsLoading(true)
        // try {
        //     const response = await axios.post("/api/insert-user", data)
        //     toast({
        //         title: "Success",
        //         description: response.data.message,
        //     })
        // } catch (error: any) {
        //     toast({
        //         variant: "destructive",
        //         title: "Error",
        //         description: error.response.data.message,
        //     })
        // }
        // finally {
        //     setIsLoading(false)
        // }
        sessionStorage.setItem("FirstPart", "Verified");
        console.log("Form Submitted and session stored as FirstPart")
    };

    return (
        <div className=" flex max-w-screen-sm w-full p-5">
            <Form {...form} >
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
                                    <FormControl className=" w-full">
                                        {name === "type" ? (
                                            <div className="flex w-full justify-between items-center gap-2">
                                                {options.map((option) => (
                                                    <div
                                                        key={option.value}
                                                        className="flex items-center flex-1"
                                                    >
                                                        <Button
                                                            className={`flex gap-2 items-center ${selectedValue === option.value
                                                                ? "bg-blue-500 text-white"
                                                                : "bg-none text-black"
                                                                } outline-blue-700`}
                                                            variant="outline"
                                                            onClick={() => handleButtonClick(option.value)}
                                                        >
                                                            {option.icon}
                                                            {option.label}
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : name === "specialist" ? (
                                            <Select
                                                onValueChange={(value) => field.onChange(value)}
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
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        field.onChange(value);
                                                    }}
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

                    <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-500">
                        {/* {isLoading ? "Submitting..." : "Submit"} */}
                        Next
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default Others;
