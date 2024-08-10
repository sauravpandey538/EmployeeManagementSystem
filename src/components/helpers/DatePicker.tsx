"use client"

import React, { useEffect, useState } from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "../ui/label"
import { WorkingTime } from "./WorkingTime"
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployeeData } from '@/lib/slices/formControl';
import { FormState } from "@/lib/slices/formControl"
export function DatePicker() {
    const [date, setDate] = useState<Date>()
    const dispatch = useDispatch();
    useEffect(() => {
        if (date) {
            const newDate = format(date, "PPP")
            console.log(newDate, typeof newDate)
            dispatch(updateEmployeeData({ field: 'joinedAt' as keyof FormState, value: newDate }));
        }


    }, [date])
    return (
        <div className="flex justify-between items-center flex-wrap gap-5">

            <div>
                <p className="py-1">Started At</p>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-auto justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick the date : </span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <WorkingTime />

        </div>

    )
}
