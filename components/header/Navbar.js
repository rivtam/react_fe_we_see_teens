
// import "./headerglobal.module.css"

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import AuthButton from "../AuthButton"
// import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";


import Badge from "@mui/material/Badge";
import { calcCartItemSum } from "../../lib/utils";
import { useRecoilState } from "recoil";
import { shoppingCartState } from "../../atoms";

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import AccountCircle from "@mui/icons-material/AccountCircle";

// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Login from '../Login'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Blog", href: "/blg" },
  // { text: "FAQ", href: "/faq" }, put this at the footer
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const menuId = "primary-search-account-menu";
  const handleProfileMenuOpen = (event) => {

    // const [open, setOpen] = useState(false);
    setOpen(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      // </div>
    );

    // console.log(" i get here")
    // console.log(" i get here", event)
    // setAnchorEl(event.currentTarget);
  };
  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          {/* <a> */}
          <Logo />
          {/* <h1 className="logo">CodeWithMarish</h1> */}
          {/* </a> */}
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Link href="/cart">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge
                badgeContent={calcCartItemSum(shoppingCart)}
                color="error"
              >
                <ShoppingCartCheckoutIcon />
              </Badge>
            </IconButton>
          </Link>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
          {/* <AuthButton /> */}

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Login />
            {/* <Box sx={style}>
              <Login />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box> */}
          </Modal>
        </Box>
      </nav>
    </header>
  );
};

export default Navbar;
