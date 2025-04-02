import React from 'react'

import { Navbar } from '../navbar/Navbar'
import { HeaderContent } from './header-content/HeaderContent'
import { MainBar } from './main-bar/MainBar'

import styles from './header.module.css'
import { Carousel } from '../Carousel/Carousel'

export const Header = () => {
  return (
    <div className={styles.header}>
      <MainBar />
      <Navbar />
      <HeaderContent />
      {/* <Carousel /> */}
    </div>
  )
}
