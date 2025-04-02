"use client"

import { useEffect, useRef, useState } from "react";
import next from '../../../../public/icons/next.svg'
import previous from '../../../../public/icons/back-svgrepo-com.svg'

import Image from "next/image";

import { CarouselSlide } from "./CarouselSlide/CarouselSlide";
import style from './carousel.module.css'


interface Props {
  children: React.ReactElement<typeof CarouselSlide> | React.ReactElement<typeof CarouselSlide>[]
}

export const Carousel: React.FC<Props> = ({ children }) => {

  const sliderRef = useRef<HTMLDivElement>(null);
  const dotContainerRef = useRef<HTMLDivElement>(null);
  const [slides, setSlides] = useState<HTMLElement[]>([]);
  const [maxSlide, setMaxSlide] = useState<number>(0);
  const [currSlide, setCurrSlide] = useState<number>(0);


  const nextSlide = () => {
    if (currSlide === maxSlide - 1)
      setCurrSlide(0);
    else
      setCurrSlide((prev) => (prev + 1));
  };

  const prevSlide = () => {
    if (currSlide === 0)
      setCurrSlide(maxSlide - 1)
    else
      setCurrSlide((prev) => (prev - 1));
  };

  const goToSlice = (index: number) => {
    console.log(slides);

    if (slides.length > 0) {
      console.log("el if se ejecúta??");

      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
    }
  };

  const moveWithBtn = (index: number) => {
    goToSlice(index);
    setCurrSlide(index);
  };

  useEffect(() => {
    const sliderNode = sliderRef.current;
    if (sliderNode) {
      const slidesNode = sliderNode.querySelectorAll<HTMLElement>(".carousel-slide_slide__eKuJN");
      setSlides(Array.from(slidesNode));
    }
  }, []);


  useEffect(() => {
    goToSlice(currSlide);
    setMaxSlide(slides.length);
  }, [slides, currSlide, goToSlice]); // posiciona los slides con al momento en el que se inicia el componente y se ejecuta el useEffect anterior, 


  return (
    <div className={style.carousel}>
      <div className={style.slider} ref={sliderRef}>
        {children}
        <div className={style.slider__dots} ref={dotContainerRef}>
          {slides && slides.map((_, i) => (
            <button
              className={style.slider__dots__dot}
              style={{
                background: i === currSlide ? '#BA265D' : ''
              }}
              key={i}
              onClick={() => moveWithBtn(i)}
            ></button>
          ))}
        </div>

        <button className={`${style["slider__btn"]} ${style["slider__btn--left"]}`} onClick={prevSlide}>
          <Image src={previous} width={30} alt="Previous" />
        </button>

        <button className={`${style["slider__btn"]} ${style["slider__btn--right"]}`} onClick={nextSlide}>
          <Image src={next} width={30} alt="next" />
        </button>
      </div>
    </div>
  );
};
