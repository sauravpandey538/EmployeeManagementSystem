import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="What you experienced?" />
            <Button type="submit" className="bg-blue-700 hover:bg-blue-500 ">Endorse</Button>
        </div>
    )
}
