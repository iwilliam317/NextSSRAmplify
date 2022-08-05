import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import { Amplify } from "aws-amplify";
// import awsExports from "../src/aws-exports";
// Amplify.configure({ ...awsExports, ssr: true });

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