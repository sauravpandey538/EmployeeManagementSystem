import * as React from "react"
import FirstPage from "../drawer/FirstPage/FilePortion"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ComponentName from "./EmployeeDetailsCard"
import SearchOperation from "./SearchOperation"

export function CarouselMain() {
    // good components will be used 
    const components = [<FirstPage />, <SearchOperation />];

    return (
        <Carousel>
            <CarouselContent>
                {components.map((children, index) => (
                    <CarouselItem key={index} className="">


                        {children}


                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
            {/* we will use condiction to enable after a proper validation */}
        </Carousel>
    )
}
