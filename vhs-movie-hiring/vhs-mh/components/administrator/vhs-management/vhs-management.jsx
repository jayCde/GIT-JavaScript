import Head from 'next/head';
import axios from 'axios'
import { useForm } from "react-hook-form";
import isInt from 'validator/lib/isInt';
import isAlpha from 'validator/lib/isAlpha';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import {API_BASE_URL, API_PORT} from '../../../configuration-files/config.js';
import styles from '../../../styles/admin/admindashboard.module.css';

export default function VhsManagement() {

        //Endpoint(s) and url(s)

        const endpoint = 'movies';
        const url = `${API_BASE_URL}:${API_PORT}/${endpoint}`;
    
            // ------------------------------------user addition ---------------------------------------------
            // ------------------------------------------------------------------------------------------------    
            const { 
            register, errors, watch,
                handleSubmit = async (e) => {
                {e.preventDefault}
                }  
            } = useForm ();
        
            //Handle form data for movie addition
            const onSubmit = ( data = {movie_title, year_released, 
                                        price, cover_photo
                            }) =>{
                console.log('data is', data)
                axios.post(studentuserurl, {
                    id: data.id,
                    movie_title: data.movie_name,
                    year_released: data.year_released,
                    price: data.price,
                    cover_photo: data.cover_photo
                }).then (resp =>{
        
                    //If data is successfully submitted
                    if (resp.status == 201){
                        window.location="/admin-dashboard";
                        alert("Movie successfully added catalogue")
                        console.log(resp.data)
                    }else{
                        //if movie addition is unsuccessful
                        window.location.href="#";
                        console.log(resp.data);
                    }
                }).catch(err =>{
                    console.log("An error occurred while adding the movie to the catalogue", err)
                    alert("Sorry an error occurred while adding the movie to the catalogue. Please try again later.")
                })
                console.log(data)
            }
        
            //watch errors in form fields
            console.log(watch('movie_title', 'year_released', 'price', 'cover_photo'));
            console.log(errors.movie_title, errors.year_released, errors.price, errors.cover_photo)
    
    
            //-----------------------------Delete movie functionality---------------------------------
            // --------------------------------------------------------------------------------------
    
            const removeMovie = id => {
                axios
                .delete(url, {headers: {
                    "Content-Type": "application/json"}
                }).then(res => {
                    const del = movies.filter(movies => id !== movies.id);
                    setMovies(del);
                });
            };
    
            // ------------------------------------Make endpoint calls  for movies list-----------------
            // ---------------------------------------------------------------------------------------
        
            //State objects
        const [movies, setMovies] = useState([]);
    
                //function to fetch users
        const fetchMovies = ( data = {movies, setMovies}) =>{
            axios.get(url, {headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            }).then(response => {
                if (response.status==200){
                    console.log("Data was fetched successfully", response.data)
                    window.alert("Movies fetched successfully")
                    localStorage.setItem('Movie list', response.data)
                    setMovies(response.data)
                }
                else{
                    console.log(response.data)
                }
            }).catch(err=>{
                console.log("There seems to be an issue fetching data")
                window.alert("Could not load the movie list. Please try again later")
            })
        }
    
        //callback function to fetch movies
        useEffect(() => {
            fetchMovies()
        }, [])
    
    
        //get date and time
        var today = new Date();
    
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
        // var dateTime = date+' '+time;
    
        //----------------------- Render table header/heading---------------------------------
        // -----------------------------------------------------------------------------------
    
        const renderTableHeading = () => {
            var headingElement =['Title', "Release Date", "Price", "Cover"]
    
            return headingElement.map((key, index) =>{
                return <th key={index}>{key.toUpperCase()}</th>
            });
        }

        //------------------------fetch logged in user credentials------------------------------
        //--------------------------------------------------------------------------------------

        const [firstname, setFirstname] = useState("")

        useEffect(() => {
            const administrator = localStorage.getItem('admin')            
                if (administrator) {
                    const loggedinUser = JSON.parse(administrator);
                    setFirstname(loggedinUser.firstname);
                    console.log("Administrator name", firstname);
                } else {
                    console.log("Administrator details not found")
                    // window.location = "#";
                }
        }, [])
    
    
        return(
            <div>
                <body>
    
                <div className={styles.title}>
                    <h3>Movie Management </h3>
                </div>
    
                <div className={styles.section}>
                    <div className={styles.leftSection}>
                        <p><h4>Recently Added:</h4></p>
                        <ul className={styles.nav}>
                            <li>Cover</li>
                            <li>Title</li>
                            <li>Price</li>
                        </ul>
                    </div>
                    
                    <div className={styles.rightSection}>
                        <h1>Welcome to the movie management pane, {firstname}</h1>
                        <p>Manage all movies and related activities here.</p>
                        <p>Calendar: {date} Time: {time}</p>
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
                                        <h4>Add movies</h4>
                                        
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input  type="text" 
                                                className={styles.InputField}
                                                placeholder="Movie Title"
                                                name="movie_title"
                                                id="movie_title"
                                                ref={register({required: true, minLength: 1,
                                                    validate: (input) => isAlpha (input)
                                                })}
                                            />
                                            <br></br>
                                            {errors.movie_title && <span className={styles.errors}>Movie title cannot be empty</span> } <br/>


                                            <br></br>
                                            <input  type="text" 
                                                className={styles.InputField}
                                                placeholder="Price"
                                                name="price"
                                                id="price"
                                                ref={register({required: true, minLength: 1,
                                                    validate: (input) => isInt (input)
                                                })}
                                            />
                                            <br></br>
                                            {errors.price && <span className={styles.errors}>Enter a valid amount.</span> } <br/>


                                            <br></br>
                                            <input  type="date" 
                                                className={styles.InputField}
                                                placeholder="Year released"
                                                name="year_released"
                                                id="year_released"
                                                ref={register({required: true,
                                                    validate: (input) => isDate (input)
                                                })}
                                            />
                                            <br></br>
                                            {errors.age && <span className={styles.errors}>Choose a date for which the movie was released</span> } <br/>

        
                                            <br></br>
                                            <input type="file"
                                                accept="image"
                                                className={styles.InputField}
                                                placeholder="Select image"
                                                name="cover_photo"
                                                id="cover_photo"
                                                ref={register({required: true,
                                                })}
                                            />
                                            <br></br>
                                            {errors.password && <span className={styles.errors}>Upload cover image for movie to be submitted</span> } <br/>
    
                                            <center>
                                                <button type="submit" value="submit" className={styles.adduserBtn}>Submit</button>
                                            </center>
                                        </form>
                                    </div>
                                </div>
    
                                    
                                </div>
    
                                <div className={styles.tableContent}>
                                <table className={styles.Table}>
                                    <thead>
                                        <tr>{renderTableHeading()}</tr>
                                    </thead>
                                    <tbody>
                                    {movies.map((movies, index) => {
                                        return (
                                        <tr key={index}>
                                            <td>{movies.id}</td>
                                            <td>{movies.title} </td>
                                            <td>{movies.price}</td>
                                            <td>{movies.year_released}</td>
                                            <td>{movies.cover_photo}</td>
                                            <td>
                                                <button>&#9997;</button>
                                                <button onClick={removeMovie}>&#10060;</button>
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