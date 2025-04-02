import { Carousel } from '@/ui/components/Carousel/Carousel'
import { CarouselSlide } from '@/ui/components/Carousel/CarouselSlide/CarouselSlide'
import { Header } from '@/ui/components/Header/Header'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <div>page??</div>
            <Carousel>
                {[1,2,3,].map((element, i) => (
                    <CarouselSlide key={i}>
                       <p>Hola mundo {i}</p>
                    </CarouselSlide>
                ))}
            </Carousel>
        </>
    )
}
export default page
