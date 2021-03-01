import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_BASE_URL, API_PORT} from '../../../../config';
import styles from '../../../styles/admin/orders.module.css'
export default function Orders(){

    // Endpoint(s) and url(s)

    const endpoint = 'orders';
    const url = `${API_BASE_URL}:${API_PORT}/${endpoint}`;

    //define orders state objects

    const [orders, setOrders] = useState([]);

    //function to fetch orders
    const fetchOrders = async (data = {orders, setOrders}) =>{
        const resp = await axios.get(url, {
        }).then(resp => {
            if (resp.status==200){
                console.log("Data was fetched successfully")
                window.alert("Orders fetched successfully")
                localStorage.setItem('Order list', resp.data)
            }
            else{
                console.log(resp)
            }
        }).catch(error=>{
            console.log("There seems to be an issue fetching data")
            window.alert("Could not load the order list. Please try again later")
        })
        setOrders(resp)
    }

    //callback function to fetch orders
    useEffect(() => {
        fetchOrders()
    }, [])

    //function to bind fetched data-----

    //function to render table header/heading
    const renderTableHeading = () => {
        var headingElement =['id', "day", "username", "food"]

        return headingElement.map((key, index) =>{
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    //function to render table body
    const renderTableBody = () =>{
    return orders && orders.map(({id, day, username, food}) => {
        return (
            <tr key ={id}>
                <td>{id}</td>
                <td>{day}</td>
                <td>{username}</td>
                <td>{food}</td>
            </tr>
        )
    })
}

    return(
        <div>
            <table className={styles.orders}>
                <thead>
                    <tr>{renderTableHeading()}</tr>
                </thead>

                <tbody>
                    {renderTableBody()}

                </tbody>
            </table>
        </div>
    );
}