'use client'
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { motion } from "framer-motion"
import { RxFramerLogo } from "react-icons/rx";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { GrSchedule } from "react-icons/gr";
import { TbMessageReport } from "react-icons/tb";
import { MdReportGmailerrorred } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

interface ComponentNameProps {

}


const items = [
    { name: "Dashboard", component: <></>, icon: LuLayoutDashboard },
    { name: "Attendence", component: <></>, icon: FaListCheck },
    { name: "list", component: <></>, icon: FaListUl },
    { name: "Message", component: <></>, icon: TiMessages },
    { name: "Schedule", component: <></>, icon: GrSchedule },
    { name: "Reports", component: <></>, icon: TbMessageReport },
    { name: "Setting", component: <></>, icon: IoSettingsOutline },
    { name: "Help Center", component: <></>, icon: MdReportGmailerrorred },



]


const SideNavigation: React.FC<ComponentNameProps> = ({ }) => {
    const [open, setOpen] = useState<boolean>(false)
    const handleIconClicked = () => {
        setOpen(!open)
        console.log(open)
    }
    return (
        <motion.div
            initial={{ x: "-100%", opacity: 1 }}
            animate={open ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 1 }}
            transition={{ type: "tween", duration: 0.4 }}
            className='  max-w-[300px] w-full h-full bg-gray-100 fixed top-20 left-0 z-50 text-black px-10'>



            <div className='flex justify-between items-center my-10'>
                <h1 className='text-blue-700 font-bold text-3xl'><RxFramerLogo /></h1>
                <h1 className='flex-1 text-center font-semibold text-2xl'>Astrea System</h1>
            </div>


            <div className=' flex flex-col gap-5 px-5'>

                {items.map((item, index) => <div
                    key={index}
                    className='flex justify-start w-full   items-center gap-5 text-gray-500 cursor-pointer'
                >
                    <h1 className=' font-bold text-xl'>{item.icon && <item.icon />}</h1>

                    <h1 className=' '>{item.name}</h1>
                </div>
                )}
            </div>











            <Button
                onClick={handleIconClicked}
                size="icon"

                className='absolute top-1/4 -right-10 bg-blue-500 rounded-full overflow-hidden' >
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={open ? { rotate: 0 } : { rotate: 180 }}

                ><ChevronLeftIcon className="h-4 w-4" /></motion.div>

            </Button>
        </motion.div>
    );
};

export default SideNavigation;