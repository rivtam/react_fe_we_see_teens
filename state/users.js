
import { atom } from 'recoil';

const usersAtom = atom({
   key: 'users',
   default: null
});

export { usersAtom };


// TODO: from https://jasonwatmore.com/post/2021/09/07/react-recoil-jwt-authentication-tutorial-and-example#fetch-wrapper-js

// Recoil Users State
// Path: /src/_state/users.js
// The users state file contains the Recoil users atom that is used to hold the array of fetched users in global state, the users state is updated in the user actions getAll function.

// The example app only contains Recoil atoms at the moment, but my idea with this file structure is that any Recoil selectors that derive from the users atom could be placed in this file as well.

