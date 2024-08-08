import { DatePicker } from '@/components/helpers/DatePicker'
import MultiSelector from '@/components/helpers/MultiSelector'
import { WorkingTime } from '@/components/helpers/WorkingTime'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function DateData() {
    return (
        <div>

            <DatePicker />
            <MultiSelector />
            <Button className='w-full my-5  bg-blue-700 hover:bg-blue-500'>Submit</Button>

        </div>
    )
}
