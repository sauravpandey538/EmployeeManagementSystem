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
                <Button className=" sm:flex items-center bg-blue-700 gap-1">
                    <Plus className="h-4 w-4  font-bold" />
                    Add Employee
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-screen-sm">
                    <DrawerHeader>
                        <DrawerTitle className="flex items-baseline w-fit py-2 ">
                            {" "}
                            <Plus className="h-4 w-4 mr-1" />
                            Add Employee
                        </DrawerTitle>
                        <DrawerDescription>Please fill out all the employee details before submitting.</DrawerDescription>
                    </DrawerHeader>
                    {/* component open here*/}
                    <CarouselMain />
                    <DrawerFooter>

                        <div className="flex flex-row-reverse  gap-3">
                            {/* <Button>
                                {" "}
                                <Plus className="h-4 w-4 mx-1 font-bold" />
                                Add Employee
                            </Button> */}

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
