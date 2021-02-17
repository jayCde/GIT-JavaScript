import Head from 'next/head'
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
            </main>

            <footer className={styles.footer}>
                The Healthy, Hunger-Free kids - 2020.
            </footer>
        </div>
    )
}