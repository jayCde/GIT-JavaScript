import Head from 'next/head'
import Link from 'next/Link'
import styles from '../styles/landing.module.css'

export default function Home(){
    return(

        <div className={styles.container}>
            <Head>
                <title>VHS Movie Hiring | Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className={styles.main}>
            {/* <img src="/Picture1.png" alt="logo" style={{position:"absolute", top:"5%", width:"50px", height:"50px"}}/> */}

                <h1 className={styles.title}>
                    VHS Movie Hiring - The Box Office Experience
                </h1>

                <p className={styles.description}>
                    Login in or Sign up below:
                </p>

                <div className={styles.buttonsgroup}>
                    <Link href="login"><button className={styles.loginbtn}>Login</button></Link>
                    
                    <Link href="signup"><button className={styles.signupbtn}>Sign Up</button></Link>
                </div>
            </main>

            <footer className={styles.footer}>
                &#169; VHS - Movie Hiring.
            </footer>
        </div>
    )
}