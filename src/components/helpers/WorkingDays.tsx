'use client'
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface HolidayIndication {
    id: number
    [key: string]: string | number;
}
interface ArrValue {
    arr: string[]
}
const holidayIndications: HolidayIndication[] = [
    { id: 1, propValue: "Sunday", indication: "S" },
    { id: 2, propValue: "Monday", indication: "M" },
    { id: 3, propValue: "Tuesday", indication: "T" },
    { id: 4, propValue: "Wednesday", indication: "W" },
    { id: 5, propValue: "Thursday", indication: "T" },
    { id: 6, propValue: "Friday", indication: "F" },
    { id: 7, propValue: "Saturday", indication: "S" }
];
const WorkingDays: React.FC<ArrValue> = ({ arr }) => {
    const [holiday, setHoliday] = useState<string[]>([]);

    useEffect(() => {
        setHoliday(arr);

    }, [arr])


    return (
        <div className="flex w-fit gap-1 flex-wrap min-w-28">
            {holidayIndications.map(({ id, propValue, indication }) => (
                <Avatar key={id} className="size-7" >
                    <AvatarFallback
                        className={holiday?.includes(propValue as string) ? "bg-blue-400" : ""}
                    >{indication}</AvatarFallback>
                </Avatar>
            ))}
        </div>

    );
}
export default WorkingDays;

