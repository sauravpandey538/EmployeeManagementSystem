import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "E010",
            name: "Saurav Pandey",
            status: "pending",
            contact: {
                phoneNumber: "98769751266",
                email: "sauravpandey0325@gmail.com"
            },
            info: "A passionate Frontend Developer"
        },
        // ...
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
