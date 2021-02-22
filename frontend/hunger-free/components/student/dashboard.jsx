import axios from 'axios';
import Head from 'next/head';
import Link from 'next/Link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/student.module.css';




export default function StudentDashboard(){

    //Using react hooks
    const { 
        register, errors, watch,
        handleSubmit = async (e) => {
            {e.preventDefault}
        }  
        } = useForm ();

    //Function to fetch meal data
    useEffect (() => {
        async function getMeal() {
            const response = await axios.get(companies_url);
            // const body = await response.json();
            setMeal(response.data.map(({ name }) => ({ id: name, name: name })));
        }
        getMeal();
        }, []);
        
        //Meal state object
        const [MealValue, setMealValue] = useState([]);

    //Endpoint(s) and url(s)
    const endpoint = 'orders';
    const orderurl = `${API_BASE_URL}:${API_PORT}/${endpoint}`;

    const mealendpoint = 'food';
    const mealurl = `${API_BASE_URL}:${API_PORT}/${mealendpoint}`;

    //Handle form data for Student Meal order
    const onSubmit = ( data = {username, meal, day}) =>{
        console.log('data is', data)
        axios.post(orderurl, {
            username: data.username,
            meal: data.meal,
            day: data.day
        }).then (resp =>{

            //If meal order placing is successful
            if (resp.status == 201){
                window.location.reload;
                alert("Meal order placed successful")
                console.log(resp.data)
                localStorage.setItem('student', JSON.stringify(resp.data))
            }else{
                //If meal order placing is unsuccessful
                window.location.href="#";
                console.log(resp.data);
            }
        }).catch(err =>{
            console.log("An error occurred while placing the order", err)
            alert("An error occured while placing the order, kindly try again later.")
        })
        console.log(data)
    }

    //watch form fields
    console.log(watch('username', 'meal', 'day'));


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
                    <p>Welcome, {firstname} .</p>
                    <p>Your user id is {id}, Kindly use this for your orders.</p>
                </div>

                <div className={styles.studentorder}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input  type="text" 
                                    className={styles.InputField}
                                    placeholder="Username"
                                    name="username"
                                    id="username"
                                    ref={register({required: true, minLength: 8,
                                        validate: (input) => isAlphanumeric (input)
                                    })}
                        />
                        
                        <select type="text" className={errors.meal && styles.errorInput, styles.InputField}
                                    placeholder="Meal *" 
                                    name="meal"
                                    id="meal" 
                                    value={MealValue}
                                    onChange={e=>setMealValue(e.currentTarget.value)}

                                    ref={register({
                                        required: true, 
                                    })}
                        >

                                    {meal.map(({id, name, key}) => (
                                    <option value={key} key={id} name={name}>
                                    {name}
                                    </option>))}

                        </select>

                        <select type="text" className={errors.day && styles.errorInput, styles.InputField}
                                    placeholder="Day *" 
                                    name="day"
                                    id="day" 
                                    value={DayValue}
                                    onChange={e=>setDayValue(e.currentTarget.value)}

                                    ref={register({
                                        required: true, 
                                    })}
                        >

                                    {meal.map(({id, name, key}) => (
                                    <option value={key} key={id} name={name}>
                                    {name}
                                    </option>))}

                        </select>


                    </form>

                </div>


                <div></div>
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