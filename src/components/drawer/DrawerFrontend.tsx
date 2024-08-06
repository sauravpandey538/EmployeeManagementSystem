import * as React from "react";
import { FilterXIcon, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { CarouselMain } from "../helpers/Carousel";

export function DrawerFrontend() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button className="hidden sm:flex items-center bg-blue-700">
                    <Plus className="h-4 w-4 mx-1 font-bold" />
                    Add Employee
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle className="flex items-baseline w-fit py-2 border-b">
                            {" "}
                            <Plus className="h-4 w-4 mx-1" />
                            Add Employee
                        </DrawerTitle>
                        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                    </DrawerHeader>
                    <CarouselMain />
                    <DrawerFooter>
                        <div className="flex flex-row-reverse  gap-3">
                            <Button>
                                {" "}
                                <Plus className="h-4 w-4 mx-1 font-bold" />
                                Add Employee
                            </Button>

                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </div>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
