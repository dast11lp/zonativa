import Link from 'next/link'
import React from 'react'

import styles from './navbar.module.css'


export const Navbar = () => {

    const links = [
        { name: 'PELÍCULAS', href: '#' },
        { name: 'SERIES', href: '#' },
        { name: 'MÚSICA', href: '#' },
        { name: 'VIDEOJUEGOS', href: '#' },
        { name: 'ANIME', href: '#' },
        { name: 'EVENTOS', href: '#' },
        { name: 'OPINIÓN', href: '#' },
    ]


    return (
        <div>
            <nav className={styles.nav}>
                <ul>
                    {links.map((el, i) => (
                        <li key={i}>
                            <Link href={el.href}>{el.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
