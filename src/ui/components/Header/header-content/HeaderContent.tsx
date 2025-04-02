import React from 'react';
import styles from './header-content.module.css';
import { Trending } from '../../trending/Trending';
import { Carousel } from '../../Carousel/Carousel';
import { CarouselSlide } from '../../Carousel/CarouselSlide/CarouselSlide';
import Image from 'next/image';

const elements = [
    {
        title: 'Football',
        image: '/images/call_of_duty.png',
    },
    {
        title: 'Anime',
        image: '/images/street_fighter.jpg',
    },
    {
        title: 'Development',
        image: '/images/devil_may_cry1.jpg',
    },
];

export const HeaderContent = () => {
    return (
        <div className={styles['header-content']}>
            <Trending />
            <div className={styles.background}>
                <Carousel >
                    {elements.map((element, i) => (
                        <CarouselSlide key={i}>
                            <Image src={element.image} style={{ objectFit: "cover" }} alt={element.title} fill />
                        </CarouselSlide>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};
