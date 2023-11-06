import React from 'react';
import styles from '@/styles/Navbar.module.css';

export default function Navbar(){
    return(
        <>
        <nav className={styles.nav}>
            <ul className={styles.nav__linkHolder}>
                <a href="#" className={styles.nav__links}>Home</a>
                <a href="#" className={styles.nav__links}>For You</a>
                <a href="#" className={styles.nav__links}>Subscriptions</a>
                <a href="#" className={styles.nav__links}>Profile</a>
            </ul>
        </nav>
        </>
    )
}