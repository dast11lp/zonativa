import React from 'react'
import styles from './header-content.module.css'
import { Trending } from '../../trending/Trending'

export const HeaderContent = () => {
    return (
        <div className={styles['header-content']}>
            <Trending />
            <div className={styles.background}></div>
        </div>
    )
}
