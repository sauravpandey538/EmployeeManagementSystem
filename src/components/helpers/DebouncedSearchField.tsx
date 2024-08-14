import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from 'lucide-react';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
interface User {
    fullName: string;
    image: string;
    employeeId: string
}



export function useDebounce(value: string, delay: number): string {
    const [debouncedValue, setDebouncedValue] = useState<string>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

const DebouncedSearchField: React.FC = () => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState<string>('');
    const [users, setUsers] = useState<User[]>([]);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [isResultsVisible, setResultsVisible] = useState<boolean>(false);
    const debouncedInput = useDebounce(inputValue, 500);
    const resultDivRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const employeeData = useAppSelector(state => state.api.data); // Adjust according to your state shape
    const fetchUsers = async (query: string): Promise<User[]> => {
        const allUsers: User[] = employeeData.users.map((employee: any) => ({
            fullName: employee.fullName,
            image: employee.image,
            employeeId: employee.employeeId
        }))
        console.log(allUsers)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(allUsers.filter(user =>
                    user.fullName.toLowerCase().includes(query.toLowerCase())
                ));
            }, 300);
        });
    };

    useEffect(() => {
        if (debouncedInput) {
            setIsTyping(false);
            setResultsVisible(true);
            fetchUsers(debouncedInput).then((result) => {
                setUsers(result);
            });
        } else {
            setUsers([]);
            setResultsVisible(false);
        }
    }, [debouncedInput]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (resultDivRef.current && !resultDivRef.current.contains(event.target as Node) &&
                inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setResultsVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setIsTyping(true);
    };

    return (

        <div className='max-w-96 w-full'>
            <div className='flex gap-3'>
                <Input
                    ref={inputRef}
                    className='rounded-xl relative '
                    type="text"
                    placeholder="Search employee here..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {isResultsVisible && inputValue && (<Button className='bg-blue-700 rounded-full flex justify-center items-center'>
                    <X className="h-4 w-3  font-bold" />
                </Button>)}
            </div>
            {isResultsVisible && users.length > 0 && (
                <div
                    ref={resultDivRef}
                    className='absolute top-20 max-w-md w-full  overflow-y-auto bg-white border border-gray-200 shadow-lg rounded-md'
                >
                    {users.map((user, index) => (
                        <div
                            onClick={() => router.push(`/employee?employeeId=${user.employeeId}`)}
                            key={index}
                            className='flex w-full items-center hover:bg-blue-300 bg-slate-200 p-3 gap-3 cursor-pointer'
                        >
                            <Avatar className='w-10 h-10'>
                                <AvatarImage src={user.image} alt={user.fullName} className='object-cover object-center' />
                                <AvatarFallback>{user.fullName[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className='flex-1'>{user.fullName}</p>
                                <p className='text-xs'>@DEVELOPMENT TEAM</p>
                            </div>
                        </div>
                    ))}
                </div>

            )}

        </div>

    );
};

export default DebouncedSearchField;
