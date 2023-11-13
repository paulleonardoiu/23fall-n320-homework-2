import React from 'react';
import styles from '@/styles/Contact.module.css';
import { useRouter } from 'next/router';

export default function Contact(){
    const [fullName, setFullName] = React.useState('Paul Leonardo');
    const [email, setEmail] = React.useState('pauleon@iu.edu');
    // let fullName = "Paul Leonardo";
    // let email = "pauleon@iu.edu";

    const router = useRouter();

    function contactFormSubmit(e){
        e.preventDefault();
        if(fullName != '' && email != ''){
            router.push('/contact/success');
        }
    }

    function updateContactInfo(e){
        // console.log(e.currentTarget.name, e.currentTarget.value);
        if(e.currentTarget.name === 'fullName'){
            // fullName = e.currentTarget.value;
            setFullName(e.currentTarget.value);
        }
        if(e.currentTarget.name === 'email'){
            // email = e.currentTarget.value;
            setEmail(e.currentTarget.value);
        }
    }

    return(
        <>
            <h1>Contact</h1>

            <form className={styles.form} onSubmit={contactFormSubmit}>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input name='fullName' type="text" placeholder='Paul Leonardo' onChange={updateContactInfo} value={fullName}/>
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input name='email' type="email" placeholder='pauleon@iu.edu' onChange={updateContactInfo} value={email}/>
                </div>
                <div className={styles.formField}>
                    <input type="submit" value='Send Contact'/>
                </div>
            </form>
        </>
    )
}