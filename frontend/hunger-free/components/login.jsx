// import axios from 'axios';
import Head from 'next/head'
// import Link from 'next/Link'
// import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { API_BASE_URL, API_PORT} from '../../config'
import styles from '../styles/landing.module.css'


export default function Login(){

    //react hooks

    const { 
        register, errors, watch,
          handleSubmit = async (e) => {
            {e.preventDefault}
          }  
        } = useForm ();

    //Endpoint(s) and url(s)

    const endpoint = '/admin';
    const url = `${API_BASE_URL}:${API_PORT}/${endpoint}`;

    return(

        <div className={styles.container}>
            <Head>
                <title>Hunger-Free kids :: Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Kindly enter your credentials to Login.
                </h1>

                <div className={styles.card}>
                    <form>

                        <input  type="text" 
                                className={styles.InputField}
                                placeholder="Username"
                                name="username"
                                id="username">
                                {/* ref={register({required: true, minLength: 8})} */}
                        </input>


                        <input type="password" 
                                className={styles.InputField}
                                placeholder="Password"
                                name="password"
                                id="password">
                                {/* ref={register({required: true, minLength: 8})} */}
                        </input>

                        <button type="submit" value="submit" className={styles.button}>Login</button>

                    </form>
                </div>
            </main>

            <footer className={styles.footer}>
                &#169; The Healthy, Hunger-Free kids - 2021.
            </footer>
        </div>
    )
}