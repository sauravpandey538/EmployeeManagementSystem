import * as React from "react"

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
    const components = [<ComponentName />, <SearchOperation />];

    return (
        <Carousel className="w-full max-w-xs h-1/2">
            <CarouselContent>
                {components.map((children, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    {children}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
            {/* we will use condiction to enable after a proper validation */}
        </Carousel>
    )
}
