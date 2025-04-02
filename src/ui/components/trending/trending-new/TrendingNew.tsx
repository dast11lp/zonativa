import Image from 'next/image'
import React from 'react'

import styles from './trending-new.module.css'
import Link from 'next/link'

export const TrendingNew = () => {
    return (
        <div className={styles['trending-new']}>
            <div className={styles.img}>
                <Image alt='Logo' src={'/images/xenoblade.jpg'} width={100} height={100} />
            </div>
            <div className={styles.content}>
                <h3>Esta es la noticia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                    <Link href={"#"}>boton 1</Link>
                    <Link href={"#"}>boton 1</Link>
                </div>
            </div>
        </div>
    )
}
