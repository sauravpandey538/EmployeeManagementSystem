import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ThreeDot from './ThreeDot';

interface EmployeeData {
    additionalInfo?: string;
    employeeId: string;
    facultyType: string;
    fullName: string;
    id: number;
    salary: number;
    email?: string;
    linkedin?: string;
    picture?: string;
    phoneNumber?: any; // todo later

}

interface ComponentProps {
    employee?: EmployeeData;
}

const ComponentName: React.FC<ComponentProps> = ({ employee }) => {
    // URL for default profile picture
    const defaultProfilePicture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6zzMonMFRxpdtQfWyX1FT7g-jjpuifpj0w&s';
    return (
        <Card className=' max-w-96 w-full'>
            <CardHeader>
                {/* Display profile picture with a fallback */}
                <div className='flex justify-between items-center border-b  pb-4 mb-2'>
                    <div className='flex gap-5 items-center'>
                        <img
                            src={employee?.picture || defaultProfilePicture}
                            alt={`${employee?.fullName}'s profile`}
                            width={40}
                            height={40}
                            style={{ borderRadius: '50%', objectFit: 'cover' }} // Ensures the profile picture is round
                        />
                        <p># {" "}{employee?.employeeId}</p>
                    </div>
                    <ThreeDot employeeId={employee?.employeeId || ""} fullName={employee?.fullName || ""} />
                </div>
                <CardTitle>{employee?.fullName}</CardTitle>
                <CardDescription>{employee?.additionalInfo}</CardDescription>
            </CardHeader>
            <CardContent className='text-slate-600'>
                <p> Employee is currently workng as <span className=' text-black font-semibold'>{employee?.facultyType}</span> with the salery of Nrs {" "}<span className=' text-black font-semibold'>{employee?.salary}</span>.</p>
            </CardContent>
            <CardFooter >

            </CardFooter>
        </Card>
    );
};

export default ComponentName;
