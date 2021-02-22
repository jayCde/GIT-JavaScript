import Head from 'next/head';
import Link from 'next/Link';

export default function dashboard(){
    return(
        <div>
            <Head>
                <div>
                    <h3>
                        Welcome to the admin dashboard, 
                    </h3>
                </div>
            </Head>

            <main>

                <div>
                    Add, delete and update users here.
                </div>

                <div>
                    Add, update and delete meals here.
                </div>

                <div>
                    Orders for the day
                </div>
            </main>

            <footer>
            &#169; The Healthy, Hunger-Free kids - 2021.

            </footer>
        </div>
    )
}