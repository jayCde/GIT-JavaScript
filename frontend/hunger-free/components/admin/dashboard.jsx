import Head from 'next/head';
import Link from 'next/Link';
import styles from '../../styles/admindashboard.module.css';

export default function Admindashboard() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Hunger-Free :: Admin Dashboard</title>
                <link rel="icon" href="/favicon/"></link>
            </Head>

            <main className={styles.main}>
                <div className={styles.title}>
                    <h3>
                        Welcome to the admin dashboard, 
                    </h3>
                </div>

                <div className={styles.card}>
                    <div className={styles.users}>
                        Add, delete and update users here.

                        <button> Add user</button>
                    </div>

                    <div className={styles.orders}>
                        Orders for the day
                        <hr style={{borderColor: "black", backgroundColor: "black",width: "70%", height: "2px"}}></hr>

                    </div>


                    <div className={styles.meals}>
                        Add, delete and update meals
                        <button>Add meal</button>
                    </div>
                </div>
                <div>
                    <Link href="/"><button>Logout</button></Link>
                </div>
            </main>

            <footer className={styles.footer}>
            &#169; The Healthy, Hunger-Free kids - 2021.

            </footer>
        </div>
    )
}