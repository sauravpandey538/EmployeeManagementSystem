import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

function Skills() {
    const [skills, setSkills] = useState(["Front-End Development", "Backend Development", "Redux JS", "Tailwind CSS", "TypeScript"])
    return (
        <div className=' flex flex-col  w-full text-white-700 gap-3 py-3'>
            <div className=' flex w-full justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Skills:</h1>
                <Plus />
            </div>
            <div className='flex flex-wrap gap-2 w-fit h-auto'>

                {skills.map((name, index) =>
                    <Button key={index} className='bg-blue-500 hover:bg-blue-300'>{name}</Button>
                )}
            </div>

        </div>
    )
}

export default Skills;
