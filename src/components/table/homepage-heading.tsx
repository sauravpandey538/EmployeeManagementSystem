'use client'
import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { FilterXIcon, Plus, Search } from 'lucide-react';
import { DrawerFrontend } from '../drawer/DrawerFrontend';
import FilterInput from '../helpers/FilterInput';
import DebouncedSearchField from '../helpers/DebouncedSearchField';
interface ComponentNameProps {

}

const Heading: React.FC<ComponentNameProps> = ({ }) => {
    return (
        <div className='h-fit w-full  py-6 px-10 flex bg-white  justify-between items-center gap-5 sticky top-0 left-0 z-50'>
            <h1 className='text-md md:text-2xl mb-2 sm:mb-0'>EMS</h1>


            <DebouncedSearchField />

            <div className='flex gap-2 w-fit'>

                <FilterInput />
                <DrawerFrontend />
            </div>
        </div>

    );
};

export default Heading;