'use client'

import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

const SearchOperation: React.FC = ({ }) => {

    const [employeeId, setEmployeeId] = useState("")
    const [name, setName] = useState("")
    const [facultyType, setFacultyType] = useState("")


    const router = useRouter()

    const handleAddEmployee = () => {
        router.push('/create-employee')
    }

    async function DoAxiosRequest(title: string, paramValue: string) {

        if (paramValue.trim() !== "") {
            try {
                const response = await axios.get('/api/user', {
                    params: {
                        [title]: paramValue,
                    }
                })
                console.log(response.data)
                sessionStorage.setItem('employeeData', JSON.stringify(response.data));
                router.push(`/employee?${title}=${paramValue}`)
            } catch (error) {
                console.error(error)
            }
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
                        onChange={(e) => setEmployeeId(e.target.value)} />

                    <Button onClick={handleSearchemployeeId}>Search</Button>

                </div>
                <div className="flex gap-3 ">
                    <Input placeholder="Search by employee name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button onClick={handleSearchName}>Search</Button>
                </div>
                <div className="flex gap-3 ">
                    <Input placeholder="Search by faculty"
                        value={facultyType}
                        onChange={(e) => setFacultyType(e.target.value)}
                    />
                    <Button onClick={handleSearchFacultyType}>Search</Button>
                </div>
            </div>
            <Button
                onClick={handleAddEmployee}
                className=" max-w-96 w-full">Add employee</Button>

        </main>
    );
};

export default SearchOperation;

// status : working 