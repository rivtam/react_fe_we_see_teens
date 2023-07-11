// import { useEffect } from "react";
// import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import Container from "@mui/material/Container";
// import Skeleton from "@mui/material/Skeleton";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Pagination from "@mui/material/Pagination";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
// import { Typography } from "@mui/material";

// import {
//   useRecoilState,
//   useRecoilValue,
//   useSetRecoilState,
//   useRecoilValueLoadable,
//   SetterOrUpdater,
// } from "recoil";
// import { homePageBookSumState, homePageQueryState } from "atoms";
// import { homePageQuery } from "selectors";

// import styles from "../styles/HomePage.module.css";
// import CommonLayout from "components/Layout";
// import LeftNav from "components/Navigation/HomeLeftNav";
// import BookInfoCard from "components/Card/BookInfo";
// import { BookSekeleton } from "components/Skeleton/BookCardSkeleton";
import Card from "@mui/material/Card";

import styles from  './Shop.module.css'
import CartItem from './CartItem'

const PAGE_SIZE = 8;
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })


const data = [{
  id: "1",
  title: "Mommy my body is changing",
  price:  50020,
  stars: 3,
  stock: 55,
  image: "/bookCover.jpg",
  description: 'Grow little girls with wisdom and confindence in themselves.',
  liked: true
},
{
  id: "2",
  title: "Lube",
  price:  7500,
  stars: 13,
  stock: 98,
  image: "/lobe.webp",
  description: 'Water based and designed with kids allergies and needs in mind.',
  liked: false


},
{
  id: "3",
  title: "bag",
  price:  4098,
  stars: 5,
  stock: 112,
  image: "/pouch.jpeg",
  description: 'This is the bag your little girl will ever need.',
  liked: true

}]

const Shop = () => {
  return <div className={styles.rowShop}>
    {data.map( (item, index) => <CartItem item={item} key={index}></CartItem> ) }
    </div>

};

export default Shop;
