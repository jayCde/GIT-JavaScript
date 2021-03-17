import Head from 'next/head';
// import Link from 'next/Link';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import isInt from 'validator/lib/isInt';
import isAlpha from 'validator/lib/isAlpha';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import {API_BASE_URL, API_PORT} from '../../../../config';
import styles from '../../../styles/admin/users.module.css';

export default function Usermgmt() {

    //Endpoint(s) and url(s)

    const endpoint = 'students';
    const studentuserurl = `${API_BASE_URL}:${API_PORT}/${endpoint}`;

        // ------------------------------------user addition ---------------------------------------------
        // ------------------------------------------------------------------------------------------------    
        const { 
        register, errors, watch,
            handleSubmit = async (e) => {
            {e.preventDefault}
            }  
        } = useForm ();
    
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

        // ------------------------------------table functionality-----------------------------------------
        // ------------------------------------------------------------------------------------------------
    
        //State objects
    const [users, setUsers] = useState([]);

            //function to fetch users
    const fetchUsers = ( data = {users, setUsers}) =>{
        axios.get(studentuserurl, {headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }).then(response => {
            if (response.status==200){
                console.log("Data was fetched successfully", response.data)
                window.alert("Users fetched successfully")
                localStorage.setItem('User list', response.data)
                setUsers(response.data)
            }
            else{
                console.log(response.data)
            }
        }).catch(err=>{
            console.log("There seems to be an issue fetching data")
            window.alert("Could not load the user list. Please try again later")
        })
    }

    //callback function to fetch orders
    useEffect(() => {
        fetchUsers()
    }, [])


    //function to render table header/heading
    const renderTableHeading = () => {
        var headingElement =['id', "Firstname", "Lastname", "Username", "Password", "Age"]

        return headingElement.map((key, index) =>{
            return <th key={index}>{key.toUpperCase()}</th>
        });
    }



    return(
        <div className={styles.container}>
            <Head>
                <title>Hunger-Free :: Admin Dashboard</title>
                <link rel="icon" href="/favicon/"></link>
            </Head>

            <main className={styles.main} id="main">
                <img src="/Picture1.png" alt="logo" style={{width:"50px", height:"50px"}}/>

                <div className={styles.referencelinks} id="reference links">

                    {/* <img src="/public/1.jpg" alt="logo"/> */}
                    <a href="#" className={styles.logo}/>

                    <a href="#users" className={styles.userlink} >
                        Users
                    </a>
                    <a href="/admindashboard/menu" className={styles.menulink} >
                        Menu
                    </a>
                    <a href="/admindashboard/#orders" className={styles.orderlink} >
                        Orders
                    </a>

                    <a href="/" className={styles.logout}>Logout</a>

                </div>

                <div className={styles.title}>
                    <h3>
                        User Management 
                    </h3>
                </div>

                <div className={styles.card} id="card">

                    <div className={styles.users} id="users">
                        Manage users here

                        <hr style={{borderColor: "black", backgroundColor: "black",width: "70%", height: "2px"}}></hr>

                        <div className={styles.addusers}>Add users
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
                                <br></br>

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
                                <br></br>

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
                                <br></br>

                                <input  type="text" 
                                    className={styles.InputField}
                                    placeholder="Age"
                                    name="age"
                                    id="addage"
                                    ref={register({required: true, minLength: 1, maxLength: 2,
                                        validate: (input) => isInt (input)
                                    })}
                                />
                                <br></br>
                                {errors.age && <span className={styles.errors}>Enter a valid age</span> } <br/>
                                <br></br>

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
                                <br></br>

                                <center>
                                    <button type="submit" value="submit" className={styles.userbtn}>Add User</button>
                                </center>
                            </form>
                        </div>

                        
                    </div>

                        <hr style={{borderColor: "black", backgroundColor: "black",width: "100%", height: "2px"}}></hr>

                    <div>
                    <table className={styles.Table}>
                        <thead>
                            <tr>{renderTableHeading()}</tr>
                        </thead>
                        <tbody>
                        {users.map((users, index) => {
                            return (
                            <tr key={index}>
                                <td>{users.id}</td>
                                <td>{users.firstname} </td>
                                <td>{users.lastname}</td>
                                <td>{users.username}</td>
                                <td>{users.password}</td>
                                <td>{users.age}</td>
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
                        
                    </div>

                </div>

            </main>

            <footer className={styles.footer}>
            &#169; The Healthy, Hunger-Free kids - 2021.

            </footer>
        </div>
    )
}