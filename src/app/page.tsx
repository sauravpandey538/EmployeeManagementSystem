'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const handleAddEmployee = () => {
    router.push('/create-employee')
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 gap-8">
      <h1 className="text-3xl font-bold">Employee Management System</h1>

      <div className=" flex flex-col gap-5 max-w-96 w-full">
        <div className="flex gap-3 ">
          <Input placeholder="Search by user id" />
          <Button>Search</Button>
        </div>
        <div className="flex gap-3 ">
          <Input placeholder="Search by user id" />
          <Button>Search</Button>
        </div>
        <div className="flex gap-3 ">
          <Input placeholder="Search by faculty" />
          <Button>Search</Button>
        </div>
      </div>
      <Button
        onClick={handleAddEmployee}
        className=" max-w-96 w-full">Add employee</Button>

    </main>
  );
}
