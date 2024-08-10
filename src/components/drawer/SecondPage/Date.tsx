import { DatePicker } from '@/components/helpers/DatePicker'
import MultiSelector from '@/components/helpers/MultiSelector'
import { WorkingTime } from '@/components/helpers/WorkingTime'
import React from 'react'
import { useSelector } from 'react-redux';
import SubmitForm from '../SubmitData';
export default function DateData() {

    return (
        <div>

            <DatePicker />
            <MultiSelector />
            <SubmitForm />

        </div>
    )
}
