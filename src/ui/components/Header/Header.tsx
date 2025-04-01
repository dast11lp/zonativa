import React from 'react'
import { Navbar } from '../navbar/Navbar'

import styles from './header.module.css'
import { HeaderContent } from './header-content/HeaderContent'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
     

      <HeaderContent />
    </div>
  )
}
