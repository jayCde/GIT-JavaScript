import Head from 'next/head';
import Link from 'next/Link';
import { useState, useEffect } from "react";
import VhsManagement from './user-management/user-management';
import UserManagement from './vhs-management/vhs-management'; 
import styles from '../../styles/admin/admindashboard.module.css';

export default function Admindashboard() {

    const [renderUsermanagement, setrenderUsermanagement] = useState(false);
    const [renderMovierental, setrenderMovierental] = useState(false);

    const showUsermanagement = () => {
        setrenderUsermanagement(true);
        setrenderMovierental(false);
      };
    
      const showMovierental = () => {
        setrenderUsermanagement(false);
        setrenderMovierental(true);
      };

    return(
        <div>
            <body>
                <div className={styles.container}>
                    <Head>
                        <title>VHS Movie Hiring | Admin Dashboard</title>
                        <link rel="icon" href="/favicon/"></link>
                    </Head>
                    
                    <header>
                        <hr style={{backgroundColor: "black", borderColor:"2px black", width: "1200px"}}></hr>

                    </header>


                    <div className={styles.buttonsgroup}>
                        <button className={styles.btnUsermgmt} onClick={showUsermanagement}>User Management</button>
                        <button className={styles.btnMovmgmt} onClick={showMovierental}>Movie Rental</button>
                        <h2 > Administrator Dashboard </h2>
                        {/* <div>Logged in as:  </div> */}
                        <Link href="/"><a className={styles.link}>Logout</a></Link>
                    </div>


                    <main className={styles.main} id="main">
                        {renderUsermanagement && <VhsManagement />}​​
                        {renderMovierental && <UserManagement />}
                    </main>

                    <footer className={styles.footer}>
                        &#169; VHS - Movie Hiring.
                    </footer>
                </div>
            </body>
        </div>
    )
}