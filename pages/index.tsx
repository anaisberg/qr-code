import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CodeBox from './components/CodeBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor Qr Code</title>
        <meta name="description" content="Training project QR code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
        <CodeBox />
      </main>
    </>
  )
}
