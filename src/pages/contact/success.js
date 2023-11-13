import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Contact.module.css';

export default function ContactSuccess(){
    return(
        <>
            <div className={styles.contactSuccess}>
                <div className={styles.successBox}>
                    <h1>Contact Message Sent Successfully</h1>
                </div>
                <div className={styles.buttons}>
                    <Link href='/contact' className={styles.btn}>Go Back</Link>
                    <Link href='/home' className={styles.btn}>Go Home</Link>
                </div>
            </div>
        </>
    )
}