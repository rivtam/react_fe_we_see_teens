import { atom, selector, useRecoilState, useRecoilValue } from "recoil";


export const cartItems = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});



export const shoppingCartState = atom<shoppingCartItemProps[]>({
  key: "shoppingCartState",
  default: [],
});

import { shoppingCartItemProps, BookProps } from "../const";

export const homePageBookSumState = atom({
  key: "homePageBookSumState",
  default: 0,
});


export const bookTypeListState = atom<string[]>({
  key: "bookTypeListState",
  default: [],
});

export const homePageQueryState = atom({
  key: "homePageQueryState",
  default: { page: 1, type: "", sort: "", size: 8 },
});

export const bookDetailsIdState = atom({
  key: "bookDetailsIdState",
  default: "",
});

export const currentUserIdState = atom({
  key: "currentUserIdState",
  default: "1",
});
