import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { FilterXIcon, Plus, Search } from 'lucide-react';
import { DrawerFrontend } from '../drawer/DrawerFrontend';
interface ComponentNameProps {

}

const Heading: React.FC<ComponentNameProps> = ({ }) => {
    return (
        <div className='h-fit w-full  py-6 px-10 flex bg-white  justify-between items-center gap-5 sticky top-0 left-0 z-50'>
            <h1 className='text-md md:text-2xl mb-2 sm:mb-0'>EMS</h1>

            <div className="flex w-full max-w-sm items-center space-x-2 relative">
                <Input type="email" placeholder="Search employee here..." className='rounded-2xl' />
                <Button type="submit"
                    className='rounded-2xl  bg-white text-black hover:bg-white hover:text-current border'>
                    <Search className="h-4 w-4" />
                </Button>
            </div>

            <div className='flex gap-2 mt-2 sm:mt-0'>
                <Button className='flex items-center sm:hidden rounded-full bg-blue-700'>
                    <FilterXIcon className="h-4 w-4" />
                </Button>
                <Button className='flex items-center sm:hidden rounded-full bg-blue-700'>
                    <Plus className="h-4 w-4" />
                </Button>
                <Button className='hidden sm:flex items-center bg-blue-700'>
                    <FilterXIcon className="h-4 w-4 mx-1" />
                    Filters
                </Button>

                <DrawerFrontend />
            </div>
        </div>

    );
};

export default Heading;