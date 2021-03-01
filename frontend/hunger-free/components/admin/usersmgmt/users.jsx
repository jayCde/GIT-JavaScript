import Head from 'next/head';
// import Link from 'next/Link';
import styles from '../../../styles/admin/users.module.css';

export default function Usermgmt() {
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
                    </div>

                </div>

            </main>

            <footer className={styles.footer}>
            &#169; The Healthy, Hunger-Free kids - 2021.

            </footer>
        </div>
    )
}