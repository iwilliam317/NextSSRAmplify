import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My Next.js Amplify app :)
        </h1>
      </main>
    </div>
  )
}