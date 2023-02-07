import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Console } from 'console';

const inter = Inter({ subsets: ['latin'] })

interface IHome {
  data: DataType[];
}

export default function Home(props: IHome) {

  return (
    <>
      <Head>
        <title>SIAKAD</title>
        <meta name="description" content="Generated by SIAKAD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul>
          {props.data.map((item) => (
            <li key={item.id}>{item.fullName}</li>
          ))}
        </ul>
      </main>
    </>
  )
}


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/users`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

type DataType = {
  id: number;
  fullName: string;
}