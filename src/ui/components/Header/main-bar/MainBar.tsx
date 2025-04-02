import React from 'react'

import styles from './main-bar.module.css'
import Logo from '@/ui/logo/Logo'

export const MainBar = () => {
    return (
        <div className={styles["main-bar"]}>
            <div className={styles.logo}>
                <Logo color='#5f1df0'/>
            </div>
        </div>
    )
}
