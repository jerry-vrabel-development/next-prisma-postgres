import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Next.js Bootstrapped</title>
      <meta name="description" content="Forwardslash Development" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js is bootstrapped
        </h1>

        
      </main>

      <footer className={styles.footer}>
footer
      </footer>
    </div>
  )
}