import Head from 'next/head'
import Header from "./header"
import Footer from "./footer"
import styles from '../styles/Home.module.css'
import Navbar from './header/Navbar';


import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Header /> */}
       <Navbar />

      <Head>
        <title>We See Teens</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
      {children}</main>
      <Footer />
    </>
  )
}
