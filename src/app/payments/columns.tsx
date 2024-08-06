"use client"

import { ColumnDef } from "@tanstack/react-table"
import WorkingDays from "@/components/helpers/WorkingDays"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface contactSchema {
    [key: string]: string
}

export type Payment = {
    id: string
    name: string
    status: "pending" | "processing" | "success" | "failed"
    contact: contactSchema
    info: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: "Employee ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "contact",
        header: "Contact",
        cell({ row }) {
            const value = row.original
            // const email = value.contact[1];
            // const updatedEmail = email.split('gmail')[0]
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
            return <WorkingDays arr={["Sunday", "Thursday"]} />
        }
    },
    {
        accessorKey: "info",
        header: "Info",
    },
]
