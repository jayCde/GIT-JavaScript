import Head from 'next/head';
// import Link from 'next/Link';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import isInt from 'validator/lib/isInt';
import isAlpha from 'validator/lib/isAlpha';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isDate from 'validator/lib/isDate';
import EditUser from './edituser';


import {API_BASE_URL, API_PORT} from '../../../configuration-files/config.js';
import styles from '../../../styles/admin/users.module.css';

export default function UserManagement() {

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


        //-----------------------------Delete user functionality---------------------------------
        // --------------------------------------------------------------------------------------

        const removeUser = id => {
            axios
            .delete(url, {headers: {
                "Content-Type": "application/json"}
            }).then(res => {
                const del = users.filter(users => id !== users.id);
                setUsers(del);
            });
        };

        // ------------------------------------Make endpoint calls  for user list-----------------
        // ---------------------------------------------------------------------------------------
    
        //State objects
    const [users, setUsers] = useState([]);

            //function to fetch users
    const fetchUsers = ( data = {users, setUsers}) =>{
        axios.get(url, {headers:{
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


    //get date and time
    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var dateTime = date+' '+time;

    //----------------------- Render table header/heading---------------------------------
    // -----------------------------------------------------------------------------------

    const renderTableHeading = () => {
        var headingElement =['id', "Firstname", "Lastname", "Username", "Password", "D_O_B", "Actions"]

        return headingElement.map((key, index) =>{
            return <th key={index}>{key.toUpperCase()}</th>
        });
    }


    return(
        <div>
            <body>

            <div className={styles.title}>
                <h3>User Management </h3>
            </div>

            <div className={styles.section}>
                <div className={styles.leftSection}>
                    <p><h4>Recently Added:</h4></p>
                    <ul className={styles.nav}>
                        <li>Name</li>
                        <li>Username</li>
                        <li>City</li>
                    </ul>
                </div>
                
                <div className={styles.rightSection}>
                    <h1>Welcome to the user management pane, </h1>
                    <p>Manage all user related activities here.</p>
                    <p>Calendar: {date} Time: {time}</p>
                    <button className={styles.adduserBtn}
                    type="button"
                    data-toggle="modal"
                    data-target="#edit-user"
                    > Edit user</button>
                </div>
            </div>
            <hr style={{backgroundColor: "white", borderColor: "5px white"}}></hr>
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
                            <div>
                                <EditUser/>
                            </div>

                                
                            </div>

                            <div className={styles.tableContent}>
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
                                        <td>{users.D_O_B}</td>
                                        <td>
                                            <button>&#9997;</button>
                                            <button onClick={removeUser}>&#10060;</button>
                                        </td>
                                    </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                                
                            </div>

                        </div>
                        {/* </div> */}

                    </main>

                </div>
        </body>
        </div>
    )
}