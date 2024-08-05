"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
const SearchOperation: React.FC = ({ }) => {
    const [employeeId, setEmployeeId] = useState("");
    const [name, setName] = useState("");
    const [facultyType, setFacultyType] = useState("");

    const [loading, setLoading] = useState<{ [key: string]: boolean }>({});
    const router = useRouter();
    const { toast } = useToast();
    const handleAddEmployee = () => {
        router.push("/create-employee");
    };

    async function DoAxiosRequest(title: string, paramValue: string) {
        if (paramValue.trim() !== "") {
            setLoading(prev => ({ ...prev, [title]: true }));

            try {
                const response = await axios.get("/api/user", {
                    params: {
                        [title]: paramValue,
                    },
                });
                console.log(response.data);
                sessionStorage.setItem("employeeData", JSON.stringify(response.data));
                router.push(`/employee?${title}=${paramValue}`);
            } catch (error: any) {
                console.error(error);
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: error.response.data.message,
                });
            } finally {
                setLoading(prev => ({ ...prev, [title]: false }));
            }
        }
        else {
            toast({
                variant: "destructive",
                title: "Invalid Input",
                description: "Please fill out fields correctly",
            });
        }
    }
    const handleSearchemployeeId = async () => {
        await DoAxiosRequest("employeeId", employeeId);
    };
    const handleSearchName = async () => {
        await DoAxiosRequest("name", name);
    };
    const handleSearchFacultyType = async () => {
        await DoAxiosRequest("facultyType", facultyType);
    };
    return (
        <main className="flex h-screen w-screen flex-col items-center justify-center p-24 gap-8">
            <h1 className="text-3xl font-bold">Employee Management System</h1>

            <div className=" flex flex-col gap-5 max-w-96 w-full">
                <div className="flex gap-3 ">
                    <Input
                        placeholder="Search by employee id"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                    />

                    <Button onClick={handleSearchemployeeId}>
                        {" "}
                        {loading["employeeId"] ? "Searching..." : "Search"}
                    </Button>
                </div>
                <div className="flex gap-3 ">
                    <Input
                        placeholder="Search by employee name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button onClick={handleSearchName}>
                        {" "}
                        {loading["name"] ? "Searching..." : "Search"}
                    </Button>
                </div>
                <div className="flex gap-3 ">
                    <Input
                        placeholder="Search by faculty"
                        value={facultyType}
                        onChange={(e) => setFacultyType(e.target.value)}
                    />
                    <Button onClick={handleSearchFacultyType}>
                        {" "}
                        {loading["facultyType"] ? "Searching..." : "Search"}
                    </Button>
                </div>
            </div>
            <Button onClick={handleAddEmployee} className=" max-w-96 w-full">
                Add employee
            </Button>
        </main>
    );
};

export default SearchOperation;

// status : working
