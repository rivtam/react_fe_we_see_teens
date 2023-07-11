import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import {currencyFormat} from '../../lib/utils'
import LoadingButton from "@mui/lab/LoadingButton";
import styles from '../../styles/Home.module.css'

import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useRecoilValueLoadable,
} from "recoil";
import { shoppingCartState } from "../../atoms";

import CartItemCard from "../Card/CartItem";
import { calcCartItemSum, calcCartItemTotalPrice } from "../../lib/utils";

const SubTotal = (props: { sum: number; price: number }) => {
  const { sum, price } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "1rem",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>
        <Typography component="span" sx={{ paddingRight: 0.5 }}>
          {sum === 1 ? `Subtotal: (${sum} item) R` : `Subtotal: (${sum} items) R`}
        </Typography>
        {currencyFormat(price)}
      </Typography>
    </Box>
  );
};

const EmptyCartAlert = () => {
  return (
    <>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        {/* This is an info alert — <strong>check it out!</strong> */}
        Your shopping cart is empty.
      </Alert>
    </>
  );
};

export default function CartList() {
  const [shoppingCart] = useRecoilState(shoppingCartState);
  const [loading, setLoading] = React.useState(false);


  console.log('shoppingCart', shoppingCart)
  const handleBuyClick = async () => {
    setLoading(true);
    // const response = await buyBook(bookID, {
    //   userID: currentUserId,
    //   quality: sum,
    // });
    // if (response.error) {
    //   enqueueSnackbar(`Error: ${response.error}.`, {
    //     variant: "error",
    //   });
    //   setLoading(false);
    //   return;
    // }
    // enqueueSnackbar(`${response.content?.message}`, {
    //   variant: "success",
    // });
    // setLoading(false);
    // setShoppingCart((oldShoppingCart) => {
    //   return oldShoppingCart.filter((i) => i.id !== bookID);
    // });
  };

  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        padding: "1rem 0",
        justifyContent: "space-between", 
      }}
    >

      <div>
      {shoppingCart.map((cartItem) => (
        <CartItemCard key={cartItem.id} {...cartItem} />
      ))}
      </div>
      <div className={styles.checkoutCard} >
      {!!shoppingCart.length && (
        <Card
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      
        >
          <SubTotal
          sum={calcCartItemSum(shoppingCart)}
          price={calcCartItemTotalPrice(shoppingCart)}
        />
              <LoadingButton
        variant="contained"
        loading={loading}
        onClick={() => {
          handleBuyClick();
        }}
      >
        Proceed to Purchase
      </LoadingButton>
        </Card>
      )}
      </div>
      </Box>
      {!shoppingCart.length && <EmptyCartAlert />}
      </>
    
  );
}
