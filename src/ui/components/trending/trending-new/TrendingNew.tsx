import Image from 'next/image'
import React from 'react'

import styles from './trending-new.module.css'

export const TrendingNew = () => {
    return (
        <div className={styles['trending-new']}>
            <div className={styles.img}>
                <Image alt='Logo' src={'/images/xenoblade.jpg'} width={50} height={50} />
            </div>
            <div className={styles.content}>
                <h3>Esta es la noticia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                    <button>boton 1</button>
                    <button>boton 2</button>
                </div>
            </div>
        </div>
    )
}
