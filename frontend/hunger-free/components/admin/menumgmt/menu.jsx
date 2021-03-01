import Head from 'next/head';
// import Link from 'next/Link';
import styles from '../../../styles/admin/admindashboard.module.css';

export default function Menumgmt() {
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
                    </div>

                </div>

            </main>

            <footer className={styles.footer}>
            &#169; The Healthy, Hunger-Free kids - 2021.

            </footer>
        </div>
    )
}