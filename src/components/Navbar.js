import React from 'react';
import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar(){
    return(
        <>
        <nav className={styles.nav}>
            <ul className={styles.nav__linkHolder}>
                <Link className={styles.nav__links} href='/home'>Home</Link>
                <Link className={styles.nav__links} href='/'>For You</Link>
                <Link className={styles.nav__links} href='/'>Subscriptions</Link>
                <Link className={styles.nav__links} href='/contact'>Contact</Link>
                {/* <a href="#" className={styles.nav__links}>Home</a>
                <a href="#" className={styles.nav__links}>For You</a>
                <a href="#" className={styles.nav__links}>Subscriptions</a>
                <a href="#" className={styles.nav__links}>Contact</a> */}
            </ul>
        </nav>
        </>
    )
}