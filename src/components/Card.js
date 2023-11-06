import React from 'react';
import styles from '@/styles/Card.module.css';

export default function Card(props){
    return(
        <>
            <div className={styles.card}>
                <div className={styles.card__image}>
                    <img className={styles.thumbnail} src={props.thumbnail} alt="thumbnail" />
                </div>
                <div className={styles.card__text}>
                    <p className={styles.card__text__title}>{props.title}</p>
                    <p className={styles.card__text__description}>{props.description}</p>
                    <div className={styles.card__text__footer}>
                        <p>{props.views}</p>
                        <p className={styles.card__text__date}>{props.date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}