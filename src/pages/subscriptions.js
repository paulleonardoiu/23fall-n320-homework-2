import React from 'react';
import styles from '@/styles/Home.module.css';
import Card from '@/components/Card.js';

export default function Subscriptions(){
    return(
        <>
            <div className={styles.siteContainer}>
            <h1 className={styles.title}>Latest Videos</h1>
            <div className={styles.cardHolder}>
            <Card
            thumbnail="/image-4.jpg" 
            title="Best Animes of the Year" 
            description="List of the most popular animes" 
            views="2.4m views"
            date="3 days ago"/>
            <Card
            thumbnail="/image-2.jpg" 
            title="Stocks You Need to Buy!" 
            description="Hottest stocks of 2023" 
            views="830K views"
            date="2 months ago"/>
            <Card
            thumbnail="/image-5.avif" 
            title="Game of the Year?" 
            description="Will Spider-Man 2 be GOTY?" 
            views="80K views"
            date="18 hours ago"/>
            <Card
            thumbnail="/image-3.jpg" 
            title="How to Buy a Car" 
            description="Car tips everyone needs to know" 
            views="100K views"
            date="4 days ago"/>
            <Card
            thumbnail="/image-6.avif" 
            title="24 hour Anime Lofi Music" 
            description="DMCA Free Music for studying and working" 
            views="527K views"
            date="1 day ago"/>
            
            </div>
        </div>
        </>
    )
}