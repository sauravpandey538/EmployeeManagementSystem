'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import EmployeeDetailsCard from "../../components/helpers/EmployeeDetailsCard"
interface EmployeeData {
    additionalInfo: string;
    employeeId: string;
    facultyType: string;
    fullName: string;
    id: number;
    salary: any;
    email?: string;
    linkedin?: string;
    picture?: string;
    phoneNumber?: any;
}

const FilterEmployee: React.FC = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const paramValue = searchParams.get('paramValue');

    const [data, setData] = useState<EmployeeData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [sessionSize, setSessionSize] = useState(0)
    useEffect(() => {

        const storedData = sessionStorage.getItem('employeeData');
        console.log('Stored Data:', storedData); // Log raw stored data
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);


                // changed users to user to aviod mistake
                if (parsedData.users && Array.isArray(parsedData.users)) {
                    setData(parsedData.users as EmployeeData[]);
                } else {
                    setError('Data format is incorrect, expected an object with a user array.');
                }
            } catch (e) {
                setError('Failed to parse employee data.');
            }
        } else {
            setError('No data found');
        }
        setLoading(false);
    }, [searchParams]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (!data || data.length === 0) return <div>No employee data available</div>;

    return (
        <div className='flex  min-h-screen justify-center items-center flex-col  w-screen gap-10 py-32'>
            {/* <h1>Employee Details</h1> */}
            {data.map((employee, index) => (
                <EmployeeDetailsCard employee={employee} key={index} />
            ))}
        </div>
    );
};

export default FilterEmployee;
