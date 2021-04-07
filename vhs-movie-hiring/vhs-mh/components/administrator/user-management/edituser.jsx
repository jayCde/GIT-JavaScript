import Head from 'next/head';
// import Link from 'next/Link';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import isInt from 'validator/lib/isInt';
import isAlpha from 'validator/lib/isAlpha';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isDate from 'validator/lib/isDate';
import Modal from "./Modal";
import {API_BASE_URL, API_PORT} from '../../../configuration-files/config.js';
import styles from '../../../styles/admin/bootstrapmodal.module.css';
export default function EditUser() {

    //Endpoint(s) and url(s)

    const endpoint = 'user';
    const url = `${API_BASE_URL}:${API_PORT}/${endpoint}`;

        // ------------------------------------user addition ---------------------------------------------
        // ------------------------------------------------------------------------------------------------    
        const { 
        register, errors, watch,
            handleSubmit = async (e) => {
            {e.preventDefault}
            }  
        } = useForm ();
    
        //Handle form data for user addition
        const onSubmit = ( data = {firstname, lastname, 
                                    username, age, password
                        }) =>{
            console.log('data is', data)
            axios.put(studentuserurl, {
                id: data.id,
                firstname: data.firstname,
                lastname: data.lastname,
                username: data.username,
                age: data.age,
                password: data.password
            }).then (resp =>{
    
                //If credentials entered for user addition are correct and addition successful
                if (resp.status == 201){
                    window.location="/admindashboard/users";
                    alert("User added successfully")
                    console.log(resp.data)
                }else{
                    //if credentials entered for user addition are incorrect and addition unsuccessful
                    window.location.href="/users";
                    console.log(resp.data);
                }
            }).catch(err =>{
                console.log("An error occurred while adding the user", err)
                alert("Sorry an error occurred while adding the user. Please try again later.")
            })
            console.log(data)
        }
    
        //watch errors in form fields
        console.log(watch('firstname', 'lastname', 'age', 'username', 'password'));
        console.log(errors.firstname, errors.lastname, errors.age, errors.username, errors.password)
    

    return(
        <div>
        <Modal  id="edit-user" title="Edit User">
            <body>

                <div className={styles.container}>
                    <main className={styles.main} id="main">
                    
                        {/* <div className={styles.card} id="card"> */}

                            <div className={styles.section}>
                            <div className={styles.useraddSection}>


                            <div className={styles.addusers} id="users">
                                <div className={styles.addusers}>
                                    <h4>Add users</h4>
                                    
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input  type="text" 
                                            className={styles.InputField}
                                            placeholder="Firstname"
                                            name="firstname"
                                            id="addfirstname"
                                            ref={register({required: true, minLength: 3,
                                                validate: (input) => isAlpha (input)
                                            })}
                                        />
                                        <br></br>
                                        {errors.firstname && <span className={styles.errors}>Enter a valid firstname to add user</span> } <br/>

                                        <input  type="text" 
                                            className={styles.InputField}
                                            placeholder="Lastname"
                                            name="lastname"
                                            id="addlastname"
                                            ref={register({required: true, minLength: 3,
                                                validate: (input) => isAlpha (input)
                                            })}
                                        />
                                        <br></br>
                                        {errors.lastname && <span className={styles.errors}>Enter a valid lastname to add user</span> } <br/>

                                        <input  type="text" 
                                            className={styles.InputField}
                                            placeholder="Username"
                                            name="username"
                                            id="addusername"
                                            ref={register({required: true, minLength: 8,
                                                validate: (input) => isAlphanumeric (input)
                                            })}
                                        />
                                        <br></br>
                                        {errors.username && <span className={styles.errors}>Enter a valid username to add user</span> } <br/>

                                        <input  type="date" 
                                            className={styles.InputField}
                                            placeholder="Date"
                                            name="D_O_B"
                                            id="D_O_B"
                                            ref={register({required: true,
                                                validate: (input) => isDate (input)
                                            })}
                                        />
                                        <br></br>
                                        {errors.age && <span className={styles.errors}>Enter a valid age</span> } <br/>

                                        <input type="password" 
                                            className={styles.InputField}
                                            placeholder="Password"
                                            name="password"
                                            id="addpassword"
                                            ref={register({required: true, minLength: 8,
                                                validate: (input) => isAlphanumeric (input)
                                            })}
                                        />
                                        <br></br>
                                        {errors.password && <span className={styles.errors}>Enter a valid password for user</span> } <br/>

                                        <center>
                                            <button type="submit" value="submit" className={styles.adduserBtn}>Add User</button>
                                        </center>
                                    </form>
                                </div>
                            </div>

                                
                            </div>

                            

                        </div>
                    </main>

                </div>
        </body>
        </Modal>

        </div>
    )
}