
import React, { ReactNode } from "react"
import style from './carousel-slide.module.css'


interface Props {
    children: React.ReactNode
}

export const CarouselSlide: React.FC<Props> = ({ children }) => {

    return (
        <div className={style.slide} >
            {children}
        </div>
    )
}
