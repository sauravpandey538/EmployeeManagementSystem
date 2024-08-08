"use client";
import * as React from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion"
import { Check } from "lucide-react";
import { Label } from "../ui/label";
const MultiSelector = () => {
    const [selectedHolidays, setSelectedHolidays] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectChange = (value: string) => {
        if (selectedHolidays.length <= 2) {

            setSelectedHolidays((prevSelectedHolidays) =>
                prevSelectedHolidays.includes(value)
                    ? prevSelectedHolidays.filter((holiday) => holiday !== value)
                    : [...prevSelectedHolidays, value]
            );
            if (selectedHolidays.length === 2) {
                setIsOpen(!isOpen);
            }


        }
        else {
            setSelectedHolidays((prev => prev.filter((holiday) => holiday !== value)))
        }

    };

    const toggleDropdown = () => {
        if (selectedHolidays.length !== 3) {
            setIsOpen(!isOpen);

        }
    };

    const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    return (
        <div className="relative inline-block w-full max-w-screen-sm mt-5">
            <Label>Holidays</Label>
            <div

                className="border border-gray-300 rounded-xl cursor-pointer p-2 w-full text-left"
                onClick={toggleDropdown}
            >
                {selectedHolidays.length > 0 ? (
                    <div className=" flex  w-full justify-between items-center">
                        <div className="flex gap-1">


                            {selectedHolidays.map((holiday) => (
                                <button
                                    key={holiday}
                                    type="button"
                                    className="  px-2 py-1  bg-blue-500 text-white rounded-xl text-sm inline-flex items-center "
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSelectChange(holiday);
                                    }}
                                >
                                    {holiday}
                                    <X className="ml-2 h-4 w-4" />


                                </button>
                            ))}
                        </div>
                        <motion.div
                            initial={{ rotate: 180 }}
                            animate={isOpen ? { rotate: 0 } : { rotate: 180 }}
                        >
                            <ChevronUp className="ml-2 h-4 w-4" />

                        </motion.div>
                    </div>

                ) : (
                    <div className=" flex justify-between items-center">
                        <p className="text-slate-500">max: up to three days</p>
                        <motion.div
                            initial={{ rotate: 180 }}
                            animate={isOpen ? { rotate: 0 } : { rotate: 180 }}
                        >
                            <ChevronUp className="ml-2 h-4 w-4" />

                        </motion.div>

                    </div>
                )}
            </div>
            {isOpen && (
                <div className="absolute bottom-16 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg z-10 text-slate-500 overflow-auto">
                    <div className="p-2 ">
                        {/* <div className="font-bold text-gray-700">WeekDays</div> */}
                        {weekDays.map((day) => (
                            <div
                                key={day}
                                className={`cursor-pointer p-2 hover:bg-gray-100 w-full  ${selectedHolidays.includes(day) ? "flex justify-between font-bold " : ""
                                    }`}
                                onClick={() => handleSelectChange(day)}
                            >
                                <p> {day}</p>
                                {selectedHolidays.includes(day) && <Check className="ml-2 h-4 w-4" />
                                }

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiSelector;
