"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FilterXIcon, Plus } from 'lucide-react';



const FilterInput = () => {
    const handleFacultyFilter = () => { };
    const btns = [
        { name: "specialist", onClick: handleFacultyFilter },
        { name: "type", onClick: handleFacultyFilter },
        { name: "holiday", onClick: handleFacultyFilter },
        { name: "available", onClick: handleFacultyFilter },
    ]
    return (
        <div className="grid grid-cols-2 gap-2">

            <Sheet >
                <SheetTrigger asChild>
                    <Button variant="outline">top</Button>
                </SheetTrigger>
                <SheetContent side='top' >
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>




                    <div className='flex gap-1'>
                        {[
                            { name: "specialist", onClick: handleFacultyFilter },
                            { name: "type", onClick: handleFacultyFilter },
                            { name: "holiday", onClick: handleFacultyFilter },
                            { name: "available", onClick: handleFacultyFilter },
                        ].map(({ name, onClick }, index) => (
                            <Button
                                key={index}
                                className='flex items-center rounded-full bg-blue-700'
                                onClick={onClick}
                            >
                                {name.charAt(0).toUpperCase() + name.slice(1)}{' working?'}
                                <Plus className="h-4 w-4" />
                            </Button>
                        ))}
                    </div>



                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit" className="bg-blue-700 hover:bg-blue-500">Search Filter</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default FilterInput;




// //const employeeList = [
//     { "name": "John Doe", "facultyType": "The Coding Team" },
//     { "name": "Jane Smith", "facultyType": "Innovative Solutions" },
//     { "name": "Emily Johnson", "facultyType": "Tech Innovators" },
//     { "name": "Michael Brown", "facultyType": "Digital Pioneers" },
//     { "name": "Sarah Davis", "facultyType": "Future Tech" },
//     { "name": "David Wilson", "facultyType": "Tech Experts" },
//     { "name": "Laura Miller", "facultyType": "Digital Innovators" },
//     { "name": "Chris Anderson", "facultyType": "Tech Leaders" },
//     { "name": "Olivia Thomas", "facultyType": "Tech Gurus" },
//     { "name": "James Taylor", "facultyType": "Future Innovators" },
//     { "name": "Sophia Martinez", "facultyType": "Tech Visionaries" },
//     { "name": "Daniel Harris", "facultyType": "Innovation Leaders" },
//     { "name": "Ava Clark", "facultyType": "Tech Mavericks" },
//     { "name": "Ethan Lewis", "facultyType": "Digital Masters" },
//     { "name": "Mia Walker", "facultyType": "Tech Innovators" },
//     { "name": "Liam Hall", "facultyType": "Future Leaders" },
//     { "name": "Isabella Young", "facultyType": "Tech Experts" },
//     { "name": "Jacob Allen", "facultyType": "Digital Gurus" },
//     { "name": "Charlotte Scott", "facultyType": "Tech Visionaries" },
//     { "name": "William Wright", "facultyType": "Innovation Masters" }
// ]
