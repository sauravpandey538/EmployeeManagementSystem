import { DatePicker } from '@/components/helpers/DatePicker'
import MultiSelector from '@/components/helpers/MultiSelector'
import { WorkingTime } from '@/components/helpers/WorkingTime'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useSelector } from 'react-redux';
import { useAppSelector } from '@/lib/hooks'
export default function DateData() {
    const formState = useAppSelector(a => a.form);
    // above code cant be written insode handleClick : hook-conflict
    const handleClick = () => {
        console.log("Final form is : ", formState)
    }
    return (
        <div>

            <DatePicker />
            <MultiSelector />
            <Button
                onClick={handleClick}
                className='w-full my-5  bg-blue-700 hover:bg-blue-500'>Submit</Button>

        </div>
    )
}
