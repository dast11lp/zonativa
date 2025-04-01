import React from 'react'
import { TrendingNew } from './trending-new/TrendingNew'
import styles from './trending.module.css'

export const Trending = () => {
    return (
        <div className={styles.trending}>
            <h2>Trending news</h2>
            <TrendingNew/>
            <TrendingNew/>
            <TrendingNew/>
        </div>
    )
}
