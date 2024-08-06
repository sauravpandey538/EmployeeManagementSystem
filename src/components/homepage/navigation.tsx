'use client'
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { motion } from "framer-motion"
interface ComponentNameProps {

}

const Navigation: React.FC<ComponentNameProps> = ({ }) => {
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

            className=' w-1/4 min-w-56 h-full bg-slate-500 fixed top-16 left-0 z-50'>
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

export default Navigation;