import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Clock, User } from 'lucide-react';
import { useAppDispatch } from '@/lib/hooks';
import { useDispatch } from 'react-redux';
import { updateEmployeeData } from '@/lib/slices/formControl';
type Option = {
    value: string;
    label: string;
    icon: React.ReactNode;
};

const options: Option[] = [
    { value: "PART-TIME", label: "PART-TIME", icon: <Clock /> },
    { value: "FULL-TIME", label: "FULL-TIME", icon: <User /> },
];
function TypeSelector() {
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState<string>("");
    const handleButtonClick = (value: string, e: any) => {
        e.preventDefault();
        setSelectedValue(value);
        dispatch(updateEmployeeData({ field: "type", value })); // Dispatch individual update
    };
    return (
        <div className="flex w-full justify-between items-center gap-2 mt-5">
            {options.map((option) => (
                <div
                    key={option.value}
                    className="flex items-center flex-1"
                >
                    <Button
                        className={`flex gap-2 items-center ${selectedValue === option.value
                            ? " text-blue-700 hover:bg-none hover:text-blue-700"
                            : "bg-none text-black"
                            }`}
                        variant={selectedValue === option.value
                            ? "ghost" : "outline"}
                        onClick={(e) => handleButtonClick(option.value, e)}
                    >
                        {option.icon}
                        {option.label}
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default TypeSelector
