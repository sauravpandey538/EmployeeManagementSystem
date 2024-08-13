import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { useAppSelector } from '@/lib/hooks';
import { FormState } from '@/lib/slices/formControl';
function Info() {
    const employeeData = useAppSelector(state => state.single.data) as FormState;
    const isError = useAppSelector(state => state.single.isError);
    return (
        <div className=' flex flex-col  w-full text-white-700 gap-3 py-3'>
            <h1 className='text-2xl font-semibold'>Info:</h1>
            <p>
                {employeeData.info}
            </p>

        </div>
    )
}

export default Info;
