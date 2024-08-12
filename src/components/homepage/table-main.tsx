import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchEmployee } from "@/lib/slices/apiCall";
import SkeletonTable from "../skeleton/table"
export default function MainTable() {
    const [data, setData] = useState<any[]>([]);
    const dispatch = useAppDispatch();
    const employeeData = useAppSelector(state => state.api.data); // Adjust according to your state shape
    const isLoading = useAppSelector(state => state.api.isLoading);
    const isError = useAppSelector(state => state.api.isError);

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                await dispatch(fetchEmployee());
            } catch (error) {
                console.error("Failed to fetch employee data:", error);
            }
        };

        fetchEmployeeData();
    }, [dispatch]);

    useEffect(() => {
        if (employeeData) {
            setData(employeeData.users);
            console.log(data)

        }
    }, [employeeData]);

    return (
        <div className="container mx-auto py-5">
            {isLoading && <SkeletonTable />}
            {isError && <p>Error loading data.</p>}
            {!isError && <DataTable columns={columns} data={data} />}

        </div>
    );
}
