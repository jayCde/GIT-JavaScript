import axios from 'axios';
import Head from 'next/head';
import Link from 'next/Link';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import { Redirect } from "react-router-dom";
import styles from '../styles/landing.module.css';
import { API_BASE_URL, API_PORT} from '../../config';
import isAlpha from 'validator/lib/isAlpha';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isInt from 'validator/lib/isInt';




export default function Signup(){

    //react hooks

    const { 
        register, errors, watch,
          handleSubmit = async (e) => {
            {e.preventDefault}
          }  
        } = useForm ();

    //Endpoint(s) and url(s)

    const endpoint = 'students';
    const studentuserurl = `${API_BASE_URL}:${API_PORT}/${endpoint}`;

    //Handle form data for login
    const onSubmit = ( data = {firstname, lastname, 
                                username, age, password
                    }) =>{
        console.log('data is', data)
        axios.post(studentuserurl, {
            id: data.id,
            firstname: data.firstname,
            lastname: data.lastname,
            username: data.username,
            age: data.age,
            password: data.password
        }).then (resp =>{

            //If user credentials are correct and login successful
            if (resp.status == 201){
                window.location="login";
                alert("Signup Successful")
                console.log(resp.data)
                localStorage.setItem('student', JSON.stringify(resp.data))
            }else{
                //if user credentials are inccorect and login unsuccessful
                window.location.href="signup";
                console.log(resp.data);
            }
        }).catch(err =>{
            console.log("An error occurred while logging in", err)
            alert("Kindly enter valid credentials")
        })
        console.log(data)
    }

    //watch errors in form fields
    console.log(watch('firstname', 'lastname', 'age', 'username', 'password'));
    console.log(errors.firstname, errors.lastname, errors.age, errors.username, errors.password)
 

    return(

        <div className={styles.container}>
            <Head>
                <title>Hunger-Free kids :: Signup</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Kindly enter your details to Signup.
                </h1>

                <div className={styles.card}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input  type="text" 
                                className={styles.InputField}
                                placeholder="Firstname"
                                name="firstname"
                                id="lastname"
                                ref={register({required: true, minLength: 3,
                                    validate: (input) => isAlpha (input)
                                })}
                        />
                        {errors.firstname && <span className={styles.errors}>Kindly enter a valid firstname</span> } <br/>
                        <br></br>

                        <input  type="text" 
                                className={styles.InputField}
                                placeholder="Lastname"
                                name="lastname"
                                id="lastname"
                                ref={register({required: true, minLength: 3,
                                    validate: (input) => isAlpha (input)
                                })}
                        />
                        {errors.lastname && <span className={styles.errors}>Kindly enter a valid lastname</span> } <br/>
                        <br></br>

                        <input  type="text" 
                                className={styles.InputField}
                                placeholder="Username"
                                name="username"
                                id="username"
                                ref={register({required: true, minLength: 8,
                                    validate: (input) => isAlphanumeric (input)
                                })}
                        />
                        {errors.username && <span className={styles.errors}>Kindly enter a valid username</span> } <br/>
                        <br></br>

                        <input  type="text" 
                                className={styles.InputField}
                                placeholder="Age"
                                name="age"
                                id="age"
                                ref={register({required: true, minLength: 1, maxLength: 2,
                                    validate: (input) => isInt (input)
                                })}
                        />
                        {errors.age && <span className={styles.errors}>Kindly enter a valid age</span> } <br/>
                        <br></br>

                        <input type="password" 
                                className={styles.InputField}
                                placeholder="Password"
                                name="password"
                                id="password"
                                ref={register({required: true, minLength: 8,
                                    validate: (input) => isAlphanumeric (input)
                                })}
                        />
                        {errors.password && <span className={styles.errors}>Kindly enter a valid password</span> } <br/>
                        <br></br>
                        
                        <button type="submit" value="submit" className={styles.button}>Signup</button>

                    </form>

                    <br></br>

                    <Link href="login"><button>Have an Account? Log In Here</button></Link>
                </div>
            </main>

            <footer className={styles.footer}>
                &#169; The Healthy, Hunger-Free kids - 2021.
            </footer>
        </div>
    )
}