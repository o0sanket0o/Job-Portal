import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Button } from "../ui/button";
import { CarouselNext, CarouselPrevious } from "../ui/carousel";

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Mobile Developer",
    "Data Scientist",
    "Data Analyst",
    "Graphic Designer",
]

export const CategoryCarousel = () => {
  return (
    <div>
        <Carousel className='mx-auto w-full my-20 max-w-xl'>
            <CarouselContent >
                {
                    category.map((cat, index) => {
                        return (
                            <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                                <Button variant="outline">{cat}</Button>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
            <CarouselPrevious></CarouselPrevious>
            <CarouselNext></CarouselNext>
        </Carousel>
    </div>
  )
}

