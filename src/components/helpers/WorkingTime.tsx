import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
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
    return (
        <div className="flex flex-col justify-between items-start w-auto">
            <p className="py-1">Working Time</p>
            <div className="flex justify-between items-center w-auto gap-4 text-gray-500">

                <Select>
                    <SelectTrigger className="max-w-40">


                        <SelectValue placeholder="From" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {incrementTime.map((value, index) => <SelectItem value={value} key={index * 100}>{value}:00</SelectItem>
                            )}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {"-"}
                <Select>
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
