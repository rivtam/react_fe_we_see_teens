import { useSetRecoilState } from 'recoil';

import { history, useFetchWrapper } from '../helpers';
import { authAtom, usersAtom } from '../state';

export { useUserActions };

function useUserActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/users`;
    const fetchWrapper = useFetchWrapper();
    const setAuth = useSetRecoilState(authAtom);
    const setUsers = useSetRecoilState(usersAtom);

    return {
        login,
        logout,
        getAll
    }

    function login(username, password) {
        return fetchWrapper.post(`${baseUrl}/authenticate`, { username, password })
            .then(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                setAuth(user);

                // get return url from location state or default to home page
                const { from } = history.location.state || { from: { pathname: '/' } };
                history.push(from);
            });
    }

    function logout() {
        // remove user from local storage, set auth state to null and redirect to login page
        localStorage.removeItem('user');
        setAuth(null);
        history.push('/login');
    }

    function getAll() {
        return fetchWrapper.get(baseUrl).then(setUsers);
    }
}

// TODO: from https://jasonwatmore.com/post/2021/09/07/react-recoil-jwt-authentication-tutorial-and-example#fetch-wrapper-js
// User Actions
// Path: /src/_actions/user.actions.js
// The user actions object returned by the useUserActions() hook function contains methods for login, logout and fetching all users. It handles communication between the React app and the backend api for everything related to users, and also handles Recoil state update operations for users and auth atoms. HTTP requests to the API are sent with the fetch wrapper.

// A React hook function is required because Recoil hook functions (e.g. useSetRecoilState) can only be called within React components or hook functions.
