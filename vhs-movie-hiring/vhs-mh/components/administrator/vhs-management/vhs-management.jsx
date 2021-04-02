import Head from 'next/head';
import axios from 'axios'
import { useForm } from "react-hook-form";
import isInt from 'validator/lib/isInt';
import isAlpha from 'validator/lib/isAlpha';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import {API_BASE_URL, API_PORT} from '../../../configuration-files/config.js';
import styles from '../../../styles/admin/admindashboard.module.css';

export default function VhsManagement() {

    //react hooks
    const { 
        register, errors, watch,
            handleSubmit = async (e) => {
            {e.preventDefault}
            }  
        } = useForm ();

        //Endpoint(s) and url(s)

        const endpoint = 'menu';
        const menuurl = `${API_BASE_URL}:${API_PORT}/${endpoint}`;
    
        //Handle form data for meal addition
        const onSubmit = ( data = {food}) =>{

            console.log('data is', data)
            axios.post(menuurl, {
                food: data.food,
            }).then (resp =>{
    
                //If new meal addition is successful
                if (resp.status == 201){
                    window.location.reloasd;
                    alert("The meal has been added to menu successfully")
                    console.log(resp.data)
                }else{
                    //if credentials entered for user addition are incorrect and addition unsuccessful
                    window.location.href="/admindashboard/users";
                    console.log(resp.data);
                }
            }).catch(err =>{
                console.log("An error occurred while adding meal to menu", err)
                alert("Sorry an error occurred while adding a meal to the menu. Kindly try again later.")
            })
            console.log(data)
        }
    
        //watch errors in form fields
        console.log(watch('food'));
        console.log(errors.food)


    return(
        <div className={styles.container}>

            <main className={styles.main} id="main">

                <div className={styles.title}>
                    <h3>
                        VHS - Movie Management Panel.
                    </h3>
                </div>

                <div className={styles.card} id="card">

                    <div className={styles.movies} id="movies">
                        Movie addition       
                    </div>

                        <hr style={{borderColor: "black", backgroundColor: "black",width: "70%", height: "2px"}}></hr>

                    <div className={styles.addusers}>
                        Add meal          
                    </div>
                                        
                </div>

            </main>

        </div>
    )
}