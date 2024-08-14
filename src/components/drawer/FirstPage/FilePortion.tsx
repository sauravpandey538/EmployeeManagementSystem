'use client';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DrawerDescription } from '@/components/ui/drawer'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import FileUploader from '@/components/helpers/ImageInput'
function FirstPage() {

    return (
        <>
            <div className='flex gap-4 justify-between max-w-screen-sm w-full items-center'>
                <div className='flex gap-4 items-center'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>PP</AvatarFallback>
                    </Avatar>
                    <div>
                        <div className='flex items-baseline'>
                            <FileUploader
                                fileType="image"
                                buttonLabel="Picture"
                            />
                            <p className='text-gray-400'>|</p>
                            <Button variant={'ghost'} className='text-red-700'>Delete</Button>
                        </div>

                        <DrawerDescription>An image of an employee, it is best if aspect ratio is square.</DrawerDescription>
                    </div>
                </div>
                <FileUploader
                    fileType="cv"
                    buttonLabel="CV"
                />
            </div>
        </>
    )
}

export default FirstPage
