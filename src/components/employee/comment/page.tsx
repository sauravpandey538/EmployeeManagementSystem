'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';

import EmployeeProfile from '@/components/employee/profile/Profile';
import { Footer } from './Footer';
function timeAgo(timestamp: number) {
    const now = Date.now();
    const secondsAgo = Math.floor((now - timestamp) / 1000);

    const units = [
        { name: 'y', seconds: 60 * 60 * 24 * 365 }, // years
        { name: 'mo', seconds: 60 * 60 * 24 * 30 }, // months
        { name: 'd', seconds: 60 * 60 * 24 },       // days
        { name: 'h', seconds: 60 * 60 },            // hours
        { name: 'min', seconds: 60 },               // minutes
        { name: 's', seconds: 1 }                   // seconds
    ];

    for (const unit of units) {
        const interval = Math.floor(secondsAgo / unit.seconds);
        if (interval >= 1) {
            return `${interval}${unit.name} ago`;
        }
    }

    return 'Just now'; // If the timestamp is very recent
}
const MainComment = () => {
    const date = Date.now()

    return (
        <div className=' max-w-96 w-full b min-h-96 max-h-screen h-full  rounded-lg px-5 flex flex-col gap-3'>
            <div className='flex-1 overflow-auto flex flex-col gap-5 '>
                <div>
                    <h1 className=' text-left  text-xl my-0 '>Endorse</h1>
                    <p className=' text-xs opacity-50'>Write anything about this employee </p>

                </div>

                <div className=' p-5 border rounded-lg flex flex-col gap-3'>
                    <div className='flex justify-start items-start gap-2'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <div>
                            <p>Saurav Pandey</p>
                            <p className='text-xs  p-0 m-0'>He is so obedient and working so hard science the starting. We are futher trying to raise his salery by 10%.</p>
                            <p className=' p-0 m-0 text-xs  text-right'>{timeAgo(date)}</p>
                        </div>
                    </div>
                </div>

                <div className=' p-5 border rounded-lg flex flex-col gap-3'>
                    <div className='flex justify-start items-start gap-2'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <div>
                            <p>Saurav Pandey</p>
                            <p className='text-xs p-0 m-0'>He is so obedient and working so hard science the starting. We are futher trying to raise his salery by 10%.</p>
                            <p className=' p-0 m-0 text-xs  text-right'>{timeAgo(date)}</p>
                        </div>
                    </div>

                </div>

                <div className=' p-5 border rounded-lg flex flex-col gap-3'>
                    <div className='flex justify-start items-start gap-2'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <div>
                            <p>Saurav Pandey</p>
                            <p className='text-xs  p-0 m-0'>He is so obedient and working so hard science the starting. We are futher trying to raise his salery by 10%.</p>
                            <p className=' p-0 m-0 text-xs  text-right'>{timeAgo(date)}</p>
                        </div>
                    </div>

                </div>

                <div className=' p-5 border rounded-lg flex flex-col gap-3'>
                    <div className='flex justify-start items-start gap-2'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <div>
                            <p>Saurav Pandey</p>
                            <p className='text-xs  p-0 m-0'>He is so obedient and working so hard science the starting. We are futher trying to raise his salery by 10%.</p>
                            <p className=' p-0 m-0 text-xs  text-right'>{timeAgo(date)}</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className=' h-auto w-full   my-5 rounded-lg'>
                <Footer />
            </div>
        </div>
    )
}

export default MainComment;
