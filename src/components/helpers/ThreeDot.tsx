'use client'
import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { useToast } from '../ui/use-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';
interface ComponentNameProps {
    employeeId: string,
    fullName: string,
    cvLink: string;
}

const ThreeDot: React.FC<ComponentNameProps> = ({ employeeId, fullName, cvLink }) => {
    const { toast } = useToast()
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false)
    const handleOption = () => { setOpen(!open) }

    const handelPoke = () => {

        toast({
            title: "Poked",
            description: `${fullName} has been poked`,
        })
    }

    //TODO : rerender the useeffect function so what i dont need to refresh to see live employee data :)
    const handelDelete = async (employeeId: string) => {

        try {

            const response = await axios.post('/api/delete-user', { employeeId })
            toast({
                title: "Successful",
                description: response.data.message,
            })
            sessionStorage.removeItem('employeeData');

        } catch (error: any) {
            console.log(error)
            toast({

                title: "Error",
                description: error.data.message,
            })
        }


    }
    const handleUpdate = () => {
        router.push(`/update-employee/${employeeId}`)
    }

    return (
        <>


            <Menubar className='border-none'>
                <MenubarMenu>
                    <MenubarTrigger><BsThreeDotsVertical onClick={handleOption} className='size-4' /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={handleUpdate}>
                            Update
                        </MenubarItem>
                        <MenubarSeparator />

                        <MenubarItem><a href={cvLink} target="_blank" rel="noopener noreferrer"> View CV</a></MenubarItem>
                        <MenubarSeparator />

                        <MenubarItem onClick={handelPoke}>Poke</MenubarItem>


                        <MenubarSeparator />
                        <MenubarItem className=' text-red-700 hover:text-red-800 hover:font-semibold' onClick={() => handelDelete(employeeId)}>
                            Delete<MenubarShortcut><MdDelete className='size-4 text-red-700' /></MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </>
    );
};

export default ThreeDot;