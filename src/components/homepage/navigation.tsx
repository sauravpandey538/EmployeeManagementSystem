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
            initial={{ x: 0, opacity: 1 }}
            animate={open ? { x: "-90%", opacity: 1 } : { x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.8 }}

            className=' w-1/4 h-screen bg-slate-500 relative'>
            <Button
                onClick={handleIconClicked}
                size="icon"

                className='absolute top-1/4 right-0 bg-blue-500 rounded-full overflow-hidden' >
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={open ? { rotate: 180 } : { rotate: 0 }}

                ><ChevronLeftIcon className="h-4 w-4" /></motion.div>

            </Button>
        </motion.div>
    );
};

export default Navigation;