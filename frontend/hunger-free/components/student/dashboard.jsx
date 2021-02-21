import axios from 'axios';
import Head from 'next/head';
import Link from 'next/Link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/student.module.css';




export default function StudentDashboard(){

//Student state object
const [id, setstudentID] = useState("");
const [firstname, setstudentFirstname] = useState("");
const [lastname, setstudentLastname] = useState("");
const [username, setstudentUsername] = useState("");

//UseEffect function to fetch student details and check login status
    useEffect(() => {
        const studentdata = localStorage.getItem('student');

        if (studentdata){
            const foundstudent = JSON.parse(studentdata);

            setstudentID(foundstudent.id)
            setstudentFirstname(foundstudent.firstname);
            setstudentLastname(foundstudent.lastname);
            setstudentUsername(foundstudent.username);

            console.log('Student is logged in');
            console.log("Student data is", foundstudent)
        
        } else {
            window.location.href="login"
        }
    }, [])

    return(

        <div className={styles.container}>
            <Head>
                <title>Hunger-Free kids :: Student Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className={styles.main}>
                <div className={styles.welcome}>
                    Welcome, {firstname} .
                </div>
                <div>
                    <Link href="login"><button>Logout</button></Link>
                </div>
            </main>

            <footer className={styles.footer}>
                &#169; The Healthy, Hunger-Free kids - 2021.
            </footer>
        </div>
    )
}