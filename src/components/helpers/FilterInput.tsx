"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FilterXIcon, Plus } from "lucide-react";
import MultiSelector from "./MultiSelector";
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import axios from "axios";
import { FormState } from "@/lib/slices/formControl";
import { useDispatch } from 'react-redux';
import { updateEmployeeData } from '@/lib/slices/formControl';
import { fetchFilterEmployee } from "@/lib/slices/employeeFilter";
import TypeSelector from "./TypeSelector";
const FilterInput = React.memo(() => {
    const router = useRouter();
    const formState = useAppSelector(a => a.form);
    const dispatch = useAppDispatch()
    const fetchData = async (formState: FormState) => {
        if (formState.type.trim() !== "" || formState.specialist.trim() !== "" || formState.holiday.length > 0) {
            const requestBody: Partial<FormState> = {};
            if (formState.specialist.trim() !== "") {
                requestBody.specialist = formState.specialist;
            }
            if (formState.type.trim() !== "") {
                requestBody.type = formState.type;
            }
            if (formState.holiday.length > 0) {
                requestBody.holiday = formState.holiday;
            }

            try {
                dispatch(fetchFilterEmployee(requestBody));
                router.push('/filter/employee')
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="flex items-center bg-blue-700 gap-1">
                        <FilterXIcon className="h-4 w-4 font-bold" />
                        Filter
                    </Button>
                </SheetTrigger>
                <SheetContent side="top" className="flex flex-col justify-center items-center">
                    <div className="max-w-screen-sm w-full">
                        <SheetHeader>
                            <SheetTitle >Filter Employee</SheetTitle>
                            <SheetDescription>
                                Make changes to the field that you want to filter.
                            </SheetDescription>
                        </SheetHeader>

                        <div className="flex flex-col  py-5  w-full ">
                            <Select onValueChange={(value) => {

                                dispatch(updateEmployeeData({ field: "specialist", value }));
                            }}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choose Position" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Marketing Team">Marketing Team</SelectItem>
                                    <SelectItem value="Development Team">
                                        Development Team
                                    </SelectItem>
                                    <SelectItem value="Others">Others</SelectItem>
                                </SelectContent>
                            </Select>
                            <TypeSelector />

                            <MultiSelector />

                        </div>
                    </div>
                    <SheetFooter className=" flex mt-6 gap-3">
                        <SheetClose asChild>
                            <Button className="text-blue-700 hover:bg-blue-500" variant={"ghost"}>Cancel</Button>
                        </SheetClose>
                        <Button
                            className="bg-blue-700 hover:bg-blue-500"
                            onClick={() => fetchData(formState)}
                        >
                            Search Filter
                        </Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div >
    );
});

export default FilterInput;
