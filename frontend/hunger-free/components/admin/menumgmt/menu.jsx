import Head from 'next/head';
import axios from 'axios'
import { useForm } from "react-hook-form";
import isAlpha from 'validator/lib/isAlpha';
// import Link from 'next/Link';
import {API_BASE_URL, API_PORT} from '../../../../config';
import styles from '../../../styles/admin/admindashboard.module.css';

export default function Menumgmt() {

    //react hooks
    const { 
        register, errors, watch,
            handleSubmit = async (e) => {
            {e.preventDefault}
            }  
        } = useForm ();

        //Endpoint(s) and url(s)

        const endpoint = 'meal';
        const menuurl = `${API_BASE_URL}:${API_PORT}/${endpoint}`;
    
        //Handle form data for meal addition
        const onSubmit = ( data = {food}) =>{

            console.log('data is', data)
            axios.post(menuurl, {
                id: data.id,
                food: data.food,
            }).then (resp =>{
    
                //If new meal addition is successful
                if (resp.status == 201){
                    window.location="/menu";
                    alert("The meal has been added to menu successfully")
                    console.log(resp.data)
                }else{
                    //if credentials entered for user addition are incorrect and addition unsuccessful
                    window.location.href="/users";
                    console.log(resp.data);
                }
            }).catch(err =>{
                console.log("An error occurred while adding meal to menu", err)
                alert("Sorry an error occurred while adding a meal to the menu.Kindly try again later.")
            })
            console.log(data)
        }
    
        //watch errors in form fields
        console.log(watch('food'));
        console.log(errors.food)


    return(
        <div className={styles.container}>
            <Head>
                <title>Hunger-Free :: Admin Dashboard</title>
                <link rel="icon" href="/favicon/"></link>
            </Head>

            <main className={styles.main} id="main">
                <div className={styles.referencelinks} id="reference links">

                    {/* <img src="/public/1.jpg" alt="logo"/> */}
                    <a href="#" className={styles.logo}/>

                    <a href="/admindashboard/users" className={styles.userlink} >
                        Users
                    </a>
                    <a href="#meals" className={styles.menulink} >
                        Menu
                    </a>
                    <a href="/admindashboard/#orders" className={styles.orderlink} >
                        Orders
                    </a>

                    <a href="/" className={styles.logout}>Logout</a>

                </div>

                <div className={styles.title}>
                    <h3>
                        Manage the menus for all meal here.
                    </h3>
                </div>

                <div className={styles.card} id="card">

                    <div className={styles.meals} id="meals">
                        Manage meal menu       

                        <hr style={{borderColor: "black", backgroundColor: "black",width: "70%", height: "2px"}}></hr>

                        <div className={styles.addusers}>Add meal
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input  type="text" 
                                    className={styles.InputField}
                                    placeholder="Enter meal to add to menu here"
                                    name="food"
                                    id="food"
                                    ref={register({required: true,
                                        validate: (input) => isAlpha (input)
                                    })}
                                />
                                <br></br>
                                {errors.food && <span className={styles.errors}>Enter a meal to add to menu, It should be at least 4 characters.</span> } <br/>
                                <br></br>

                                <center>
                                    <button type="submit" value="submit" className={styles.userbtn}>Add Meal</button>
                                </center>

                            </form>
                        </div>
                                        
                    </div>

                </div>

            </main>

            <footer className={styles.footer}>
            &#169; The Healthy, Hunger-Free kids - 2021.

            </footer>
        </div>
    )
}