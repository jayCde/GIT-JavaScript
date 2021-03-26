import React, {useState, useEffect} from 'react';
// import Link from 'next/link';
import axios from 'axios';
import {API_BASE_URL, API_PORT} from '../../../../config';
import styles from '../../../styles/admin/orders.module.css'
export default function Orders(){

    // Define styles
    const {Table}= styles;

    // Endpoint(s) and url(s)

    const endpoint = 'orders';
    const url = `${API_BASE_URL}:${API_PORT}/${endpoint}`;

    //define orders state objects

    const [orders, setOrders] = useState([]);

    //function to fetch orders
    const fetchOrders = ( data = {orders, setOrders}) =>{
        axios.get(url, {headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }).then(response => {
            if (response.status==200){
                console.log("Data was fetched successfully", response.data)
                window.alert("Orders fetched successfully")
                localStorage.setItem('Order list', response.data)
                setOrders(response.data)
            }
            else{
                console.log(response.data)
            }
        }).catch(err=>{
            console.log("There seems to be an issue fetching data")
            window.alert("Could not load the order list. Please try again later")
        })
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
        });
    }

    //function to render table body
    return (
        <div>
          <table className={Table}>
            <thead>
              <tr>{renderTableHeading()}</tr>
            </thead>
            <tbody>
              {orders.map((orders, index) => {
                return (
                  <tr key={index}>
                    <td>{orders.id}</td>
                    <td>{orders.day} </td>
                    <td>{orders.username}</td>
                    <td>{orders.food}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );

   }