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
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployeeData } from '@/lib/slices/formControl';
import DateData from "./Date";
import { FormState } from "@/lib/slices/formControl";
const DataInfo = () => {
    const [infoText, setInfoText] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [infoCount, setInfoCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { toast } = useToast();
    const dispatch = useDispatch();
    const form = useForm({
        defaultValues: {
            phoneNumber: '',
            info: ''
        },
    });

    const onSubmit = async (data: any) => {
        console.log(data)
        for (const field in data) {
            if (data.hasOwnProperty(field)) {
                dispatch(updateEmployeeData({ field: field as keyof FormState, value: data[field] }));
            }
        }
    };

    const handleInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;

        setInfoText(newText);
        // exceed limit will be controlled by zod later...

    };
    const handlePhoneNumberChange = (e: any) => {
        const newDigit = e.target.value;
        setPhoneNumber(newDigit);
        console.log(phoneNumber.length)


    }
    useEffect(() => {

        setInfoCount(infoText.length);
        if (infoText.trim() !== '') {
            dispatch(updateEmployeeData({ field: 'info' as keyof FormState, value: infoText }));


        }


    }, [infoText]);
    useEffect(() => {

        if (phoneNumber.length === 10) {
            dispatch(updateEmployeeData({ field: 'phoneNumber' as keyof FormState, value: phoneNumber }));
        }

    }, [phoneNumber]);

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
                                                    onChange={(e) => {
                                                        field.onChange(e);
                                                        handlePhoneNumberChange(e); // Trigger form submission
                                                    }}
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


                </form>

            </Form>
            {/* <Button type="submit" className="w-full bg-blue-700">
                        {isLoading ? "Submitting..." : "Submit"}
                    </Button> */}
            <DateData />
        </div>
    );
};
export default DataInfo;
// note : is onchange makes website slow, i will send value as prop to dateInfo
