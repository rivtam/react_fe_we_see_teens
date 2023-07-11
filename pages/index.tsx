import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Shop from '../components/shop/Shop'

// // import * as React from "react";
// import Link from "next/link";
// // import Image from "next/image";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import CardMedia from "@mui/material/CardMedia";
// import Rating from "@mui/material/Rating";
// import IconButton, { IconButtonProps } from "@mui/material/IconButton";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>

      {/* <main className={styles.main}> */}
        <div className={styles.description}>
          <p>
          Mommy my body is changing... &nbsp;
            <code className={styles.code}>WeSeeTeens</code>
          </p>
          <div>
            <a
              href="https://weseeyou.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              By {' '}
              <Image
                src="/favicon_io/favicon-32x32.png"
                alt="WSY Logo"
                className={styles.vercelLogo}
                width={32}
                height={32}
                priority
              /> 
              <div className={styles.weseeyou}>WeSeeYou</div>
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          {/* <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> */}
        </div>

        <Shop />


        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      {/* </main> */}
{/* 
      <CardActions>
        <IconButton
          aria-label="add to cart"
          disabled={stock <= 0}
          onClick={() => {
            addItem();
          }}
        >
          <AddShoppingCartIcon />
        </IconButton>
        <Typography
          variant="h5"
          sx={{ marginLeft: "auto", marginRight: "8px" }}
        >
          <Typography
            component="span"
            variant="body2"
            sx={{ paddingRight: 0.5 }}
          >
            $
          </Typography>
          {currencyFormat(price)}
        </Typography>
      </CardActions> */}
    </Layout>
  )
}
