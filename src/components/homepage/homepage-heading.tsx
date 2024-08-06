import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { FilterXIcon, Plus, Search } from 'lucide-react';
interface ComponentNameProps {

}

const Heading: React.FC<ComponentNameProps> = ({ }) => {
    return (
        <div className='h-fit w-full bg-blue-300 py-2 px-6 flex justify-between items-center'>
            <h1 className='text-2xl'>EMS</h1>


            <div className="flex w-full max-w-sm items-center space-x-2 relative">
                <Input type="email" placeholder="Search employee here..." className='rounded-2xl' />
                <Button type="submit"
                    className=' rounded-2xl absolute top-0 right-0 bg-transparent text-black hover:bg-transparent hover:text-current'
                >
                    <Search className="h-4 w-4" />

                </Button>
            </div>

            <div className='flex gap-2'>
                <Button>
                    <FilterXIcon className="h-4 w-4 mx-1" />
                    Filters</Button>

                <Button>
                    <Plus className="h-4 w-4 mx-1" />
                    Add Employee</Button>
            </div>
        </div>
    );
};

export default Heading;