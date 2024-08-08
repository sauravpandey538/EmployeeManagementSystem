import React, { useEffect, useState } from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployeeData } from '@/lib/slices/formControl';
import { FormState } from "@/lib/slices/formControl"

const incrementTime = [
    "00",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
]
const decrementTime = [...incrementTime].reverse();
export function WorkingTime() {
    const [selectedValueFrom, setSelectedValueFrom] = useState<string>('');
    const [selectedValueTo, setSelectedValueTo] = useState<string>('');

    const dispatch = useDispatch();
    const handleChangeFrom = (value: string) => {
        setSelectedValueFrom(value);
    };
    const handleChangeTo = (value: string) => {
        setSelectedValueTo(value);
    };
    useEffect(() => {
        if (selectedValueFrom && selectedValueTo) {
            dispatch(updateEmployeeData({ field: 'workingTime' as keyof FormState, value: `${selectedValueFrom}:00 - ${selectedValueTo}:00` }));

        }

    }, [handleChangeTo, handleChangeFrom])
    return (
        <div className="flex flex-col justify-between items-start w-auto">
            <p className="py-1">Working Time</p>
            <div className="flex justify-between items-center w-auto gap-4 text-gray-500">

                <Select value={selectedValueFrom} onValueChange={handleChangeFrom}>
                    <SelectTrigger className="max-w-40">
                        <SelectValue placeholder="From" />
                    </SelectTrigger>
                    <SelectContent className="z-50">
                        <SelectGroup>
                            {incrementTime.map((value, index) => <SelectItem value={value} key={index * 100}>{value}:00</SelectItem>
                            )}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {"-"}
                <Select value={selectedValueTo} onValueChange={handleChangeTo}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="To" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {decrementTime.map((value, index) => <SelectItem value={value} key={index * 100}>{value}:00</SelectItem>
                            )}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>

    )
}
//error to be fixed : while selecting fields, multi-selector is being clicked automatically.
