'use client';

import { useEffect, useState } from "react";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import SkeletonCard from "@/components/skeleton/table";
import { useSearchParams } from "next/navigation";
import { fetchFilterEmployee } from "@/lib/slices/employeeFilter";

export default function MainTable() {
    const [data, setData] = useState<any[]>([]);
    const dispatch = useAppDispatch();
    const searchParams = useSearchParams();
    const dataInUrl = searchParams.get('data');

    const employeeData = useAppSelector(state => state.filter.data);
    const isLoading = useAppSelector(state => state.filter.isLoading);
    const isError = useAppSelector(state => state.filter.isError);

    useEffect(() => {
        if (dataInUrl) {
            const decodedObject = JSON.parse(decodeURIComponent(dataInUrl));
            dispatch(fetchFilterEmployee(decodedObject));
        }
    }, [dataInUrl, dispatch]);

    useEffect(() => {
        if (employeeData) {
            setData(employeeData);  // Update the local state with the retrieved data
        }
    }, [employeeData]);

    return (
        <div className="container mx-auto py-5">
            {isLoading && <SkeletonCard />}
            {isError && <p>Error loading data.</p>}
            {!isError && employeeData && <DataTable columns={columns} data={data} />}
        </div>
    );
}
