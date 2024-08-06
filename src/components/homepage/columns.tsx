"use client"

import { ColumnDef } from "@tanstack/react-table"
import WorkingDays from "@/components/helpers/WorkingDays"
import { Button } from "@/components/ui/button"
import ThreeDot from "@/components/helpers/ThreeDot"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface ContactSchema {
    [key: string]: string
}
export interface NameSchema {
    [key: string]: string
}


export type Payment = {
    id: string
    name: NameSchema
    holiday: string[]
    contact: ContactSchema
    info: string
    status: "FULL-TIME" | "PART-TIME"
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: "Employee ID",
    },
    {
        accessorKey: "name",
        header: "Name",
        cell({ row }) {
            const value = row.original
            return <div className="grid gap-1">
                <div className="font-semibold text-black"> {value.name.name} </div>
                <div className="text-slate-600 text-sm"> {value.name.facultyType} </div>
            </div>
        }
    },
    {
        accessorKey: "contact",
        header: "Contact",
        cell({ row }) {
            const value = row.original
            return <div className="grid gap-1">
                <div> {value.contact.phoneNumber} </div>
                <div className="text-blue-700"> {value.contact.email} </div>
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
                className={`${value.status === 'FULL-TIME' ? "text-green-400 bg-green-50" : "text-blue-400 bg-blue-50"}`}
            >{value.status}</Button>;
        }
    },
    {
        accessorKey: "more",
        header: "More",
        cell({ row }) {
            const value = row.original

            return <ThreeDot
                fullName={value.name.name}
                employeeId={value.id} />
        }
    },
]
