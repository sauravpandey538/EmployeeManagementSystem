import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, UserPen } from "lucide-react";
import { BsCashStack } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { useAppSelector } from "@/lib/hooks";
import { FormState } from "@/lib/slices/formControl";
const EmployeeTitle = () => {
    const employeeData = useAppSelector(state => state.single.data) as FormState;
    const isError = useAppSelector(state => state.single.isError);
    return (
        <>  {!employeeData && !isError && <p>Error came ! Tru again later !!</p>}
            {employeeData && <div className="flex justify-start items-start gap-2 py-3 border-b-2">
                <Avatar className="relative rounded-sm w-24 h-24 overflow-hidden">
                    <AvatarImage
                        src={employeeData?.image}
                        alt="Employee Image"
                        className="object-cover w-full h-full"
                    />
                    <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200">
                        PP
                    </AvatarFallback>
                    <UserPen className="absolute -bottom-1 -right-1 w-6 h-6 bg-white text-black p-1 border-2 border-white rounded-full" />
                </Avatar>
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-semibold">{employeeData?.fullName}</p>
                    <p className="text-xs p-0 m-0 w-full flex items-center">
                        <Mail className="w-4 h-4 mr-2 " />
                        {employeeData?.email}
                    </p>{" "}
                    <p className="text-xs p-0 m-0 w-full flex items-center">
                        {" "}
                        <FaPhone className="w-4 h-4 mr-2 " />
                        {employeeData?.phoneNumber}
                    </p>
                    <p className="text-xs p-0 m-0 w-full flex items-center">
                        {" "}
                        <BsCashStack className="w-4 h-4 mr-2 " />
                        27k/month
                    </p>
                    <Button
                        asChild
                        variant={"ghost"}
                        className="bg-none hover:bg-transparent hover:text-blue-700 border"
                    >
                        <a href={employeeData?.cv} target="_blank" rel="noopener noreferrer">
                            View CV
                        </a>

                    </Button>
                </div>
            </div>}
        </>
    );
};

export default EmployeeTitle;
