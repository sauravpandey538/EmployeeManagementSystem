import * as React from "react"
import First from "../drawer/FirstPage/page"
import Second from "../drawer/SecondPage/page"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import DataInfo from "../drawer/SecondPage/DataInfo"

export function CarouselMain() {
    // good components will be used 
    const components = [<First />, <Second />];

    return (
        <Carousel>
            <CarouselContent>
                {components.map((children, index) => (
                    <CarouselItem key={index} className="">


                        {children}


                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            {/* we will use condiction to enable after a proper validation */}
        </Carousel>
    )
}
