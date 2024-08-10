import React from 'react';
import { useAppSelector } from '@/lib/hooks'
import { Button } from '@/components/ui/button'
import { useToast } from "@/components/ui/use-toast";

import axios from 'axios';
interface ComponentNameProps {

}

const SubmitForm: React.FC<ComponentNameProps> = ({ }) => {
    const formState = useAppSelector(a => a.form);
    const { toast } = useToast()
    const handleClick = async () => {

        try {
            const response = await axios.post("/api/insert-user", formState)
            toast({
                title: "Success",
                description: response.data.message,
            });

        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Error",
                description: error.response.data.message,
            });
            // console.log('Error submitting employee', error)
        }
        console.log("Final form is : ", formState)
    }
    return (
        <Button
            onClick={handleClick}
            className='w-full my-5  bg-blue-700 hover:bg-blue-500'>Submit</Button>
    );
};

export default SubmitForm;