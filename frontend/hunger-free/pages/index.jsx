import Head from 'next/head'
import Link from 'next/Link'
import styles from '../styles/landing.module.css'

export default function Home(){
    return(

        <div className={styles.container}>
            <Head>
                <title>Hunger-Free kids</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to The Healthy, Hunger-Free kids.
                </h1>

                <p className={styles.description}>
                    Get started by Loging in or Signing up:
                </p>

                <div className={styles.buttons}>
                    <Link href="/"><button>Login</button></Link>
                    <Link href="/"><button>Sign Up</button></Link>
                </div>
            </main>

            <footer className={styles.footer}>
                &#169; The Healthy, Hunger-Free kids - 2021.
            </footer>
        </div>
    )
}