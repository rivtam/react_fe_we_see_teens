import { useRecoilState } from 'recoil';

// import { history } from '../helpers';
import { authAtom } from '../state';

export { useFetchWrapper };

function useFetchWrapper() {
   const [auth, setAuth] = useRecoilState(authAtom);

   return {
      get: request('GET'),
      post: request('POST'),
      put: request('PUT'),
      delete: request('DELETE')
   };

   function request(method) {
      return (url, body) => {
         const requestOptions = {
            method,
            headers: authHeader(url)
         };
         if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
         }
         return fetch(url, requestOptions).then(handleResponse);
      }
   }

   // helper functions

   function authHeader(url) {
      // return auth header with jwt if user is logged in and request is to the api url
      const token = auth?.token;
      const isLoggedIn = !!token;
      const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
      if (isLoggedIn && isApiUrl) {
         return { Authorization: `Bearer ${token}` };
      } else {
         return {};
      }
   }

   function handleResponse(response) {
      return response.text().then(text => {
         const data = text && JSON.parse(text);

         if (!response.ok) {
            if ([401, 403].includes(response.status) && auth?.token) {
               // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
               localStorage.removeItem('user');
               setAuth(null);
               // history.push('/login');
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
         }

         return data;
      });
   }
}

// TODO: from https://jasonwatmore.com/post/2021/09/07/react-recoil-jwt-authentication-tutorial-and-example#fetch-wrapper-js
// Fetch Wrapper
// Path: /src/_helpers/fetch-wrapper.js
// The fetch wrapper is a lightweight wrapper around the native browser fetch() function used to simplify the code for making HTTP requests. It returns an object with methods for get, post, put and delete requests, it automatically handles the parsing of JSON data from responses, and throws an error if the HTTP response is not successful (!response.ok). If the response is 401 Unauthorized or 403 Forbidden the user is automatically logged out of the React + Recoil app.

// The authHeader() function is used to automatically add a JWT auth token to the HTTP Authorization header of the request if the user is logged in and the request is to the application API url. The current logged in (auth) state of the user is retrieved from Recoil with a call to useRecoilState(authAtom), the setAuth() function is used in the handleResponse() function to log the user out if required.

// With the fetch wrapper a POST request can be made as simply as this: fetchWrapper.post(url, body);. It's used in the example app by user actions.


