import { atom } from 'recoil';

const get_user = () => {
   // console.log('localStorage', window, typeof window === 'undefined')
   // JSON.parse(typeof window === 'undefined' ? {} : localStorage.getItem('user'))
   return {}
}

const authAtom = atom({
   key: 'auth',
   // get initial state from local storage to enable user to stay logged in
   default: get_user()
});



export { authAtom };


// TODO: from https://jasonwatmore.com/post/2021/09/07/react-recoil-jwt-authentication-tutorial-and-example#fetch-wrapper-js

// Recoil Auth State
// Path: /src/_state/auth.js
// The auth state file contains the Recoil auth atom that is used to hold the current logged in user in global state, the auth state is updated in the user actions login and logout functions.

// The example app only contains Recoil atoms at the moment, but my idea with this file structure is that any Recoil selectors that derive from the auth atom could be placed in this file as well.

