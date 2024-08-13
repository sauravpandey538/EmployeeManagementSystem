'use client'
import React, { useState, useEffect } from "react"
import MainComment from "@/components/employee/comment/page"
import MainProfile from "@/components/employee/profile/page"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { fetchSingleEmployee } from "@/lib/slices/getSingleEmployee"
import SkeletonCard from "@/components/skeleton/table";
import { useSearchParams } from 'next/navigation';

import { FormState } from "@/lib/slices/formControl"
function page() {
    const [data, setData] = useState<FormState | any>({});

    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();

    const employeeId = searchParams.get('employeeId');
    const employeeData = useAppSelector(state => state.single.data);
    const isLoading = useAppSelector(state => state.single.isLoading);
    const isError = useAppSelector(state => state.single.isError);

    useEffect(() => {
        if (employeeId) {
            console.log(typeof employeeId)
            dispatch(fetchSingleEmployee(employeeId));
        }
    }, [employeeId, dispatch, searchParams]);

    useEffect(() => {
        if (employeeData) {
            setData(employeeData);
        }
    }, [employeeData]);

    return (
        <div className='flex justify-center items-center min-h-screen w-full gap-10 border flex-wrap  text-black'>
            {isLoading && <SkeletonCard />}
            {isError && <p>Error loading data.</p>}
            {!isError && employeeData && <>
                <MainProfile />
                <MainComment />
            </>}
        </div>
    )
}

export default page
