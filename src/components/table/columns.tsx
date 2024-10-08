// "use client"

import { ColumnDef } from "@tanstack/react-table"
import WorkingDays from "@/components/helpers/WorkingDays"
import { Button } from "@/components/ui/button"
import ThreeDot from "@/components/helpers/ThreeDot"
import { useRouter } from "next/navigation"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employee = {
    employeeId: string
    fullName: string
    specialist: string
    holiday: string[]
    phoneNumber: string,
    email: string,
    info: string
    type: "FULL-TIME" | "PART-TIME"
    cv: string,
}


export const columns: ColumnDef<Employee>[] = [
    {
        accessorKey: "employeeId",
        header: "Employee ID",
    },
    {
        accessorKey: "name",
        header: "Name",
        cell({ row }) {
            const router = useRouter();
            const handleOpenEmployeeDetail = (id: string) => {
                router.push(`/employee?employeeId=${id}`)
            }
            const value = row.original
            return <div className="grid gap-1">
                <div className="font-semibold text-black cursor-pointer" onClick={() => handleOpenEmployeeDetail(value.employeeId)}> {value.fullName} </div>
                <div className="text-slate-600 text-sm"> {value.specialist} </div>
            </div>
        }
    },
    {
        accessorKey: "contact",
        header: "Contact",
        cell({ row }) {
            const value = row.original
            return <div className="grid gap-1">
                <div> {value.phoneNumber} </div>
                <div className="text-blue-700"> {value.email} </div>
            </div>
        }
    },
    {
        accessorKey: "working days",
        header: "Working Days",
        cell({ row }) {
            const value = row.original
            return <WorkingDays arr={value.holiday} />
        }
    },
    {
        accessorKey: "info",
        header: "Info",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell({ row }) {
            const value = row.original
            return <Button
                variant={'ghost'}
                className={`${value.type === 'FULL-TIME' ? "text-green-400 bg-green-50" : "text-blue-400 bg-blue-50"}`}
            >{value.type}</Button>;
        }
    },
    {
        accessorKey: "more",
        header: "More",
        cell({ row }) {
            const value = row.original

            return <ThreeDot
                fullName={value.fullName}
                employeeId={value.employeeId}
                cvLink={value.cv}
            />
        }
    },
]
