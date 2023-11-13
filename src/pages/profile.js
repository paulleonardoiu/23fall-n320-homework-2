import React from 'react';
import styles from '@/styles/Profile.module.css';
import Card from '@/components/Card.js';

export default function Profile(){
    return(
        <>
            <div className={styles.profilePage}>
                <div className={styles.banner}>
                    
                    {/* <img src="/banner.jpg" alt="banner" /> */}
                </div>
                <div className={styles.profile}>
                    <div className={styles.profilePicture}>
                        <img src="/profile.jpg" alt="profile picture" />
                    </div>
                    <div className={styles.about}>
                        <h1>Paul Leonardo</h1>
                        <p>@pauleon - 129 subscribers - 2 videos</p>
                        <p>Welcome to my channel!</p>
                    </div>
                </div>
                <div className={styles.videos}>
                    <h1>Videos</h1>
                    <div className={styles.videosContainer}>
                    <Card
                    thumbnail="/image-5.avif" 
                    title="Game of the Year?" 
                    description="Will Spider-Man 2 be GOTY?" 
                    views="80K views"
                    date="18 hours ago"/>
                    <Card
                    thumbnail="/image-6.avif" 
                    title="24 hour Anime Lofi Music" 
                    description="DMCA Free Music for studying and working" 
                    views="527K views"
                    date="1 day ago"/>
                    </div>
                </div>
            </div>
        </>
    )
}