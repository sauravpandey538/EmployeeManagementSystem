'use client'
import { useEffect, useState } from "react";
import { columns } from "@/components/homepage/columns";
import { DataTable } from "@/components/homepage/data-table";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchEmployee } from "@/lib/slices/apiCall";
import { fetchFilterEmployee } from "@/lib/slices/employeeFilter";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import SkeletonCard from "@/components/skeleton/table";
export default function MainTable() {
    const [data, setData] = useState<any[]>([]);
    const dispatch = useAppDispatch();
    const employeeData = useAppSelector(state => state.filter.data);
    const isLoading = useAppSelector(state => state.api.isLoading);
    const isError = useAppSelector(state => state.api.isError);


    useEffect(() => {
        if (employeeData) {
            setData(employeeData);
            console.log(data)

        }
    }, [employeeData]);

    return (
        <div className="container mx-auto py-5">
            <Provider store={store}>
                {isLoading && <SkeletonCard />}
                {isError && <p>Error loading data.</p>}
                {!isError && employeeData && <DataTable columns={columns} data={data} />}
            </Provider>
        </div>
    );
}
// error : when we refresh the webpage, employee is getting empty