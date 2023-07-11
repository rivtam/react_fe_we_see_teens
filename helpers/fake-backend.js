export { fakeBackend };

function fakeBackend() {
   let users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
   if (typeof window !== "undefined") {
      // browser code

      let realFetch = window.fetch;
      window.fetch = function (url, opts) {
         return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
               switch (true) {
                  case url.endsWith('/users/authenticate') && opts.method === 'POST':
                     return authenticate();
                  case url.endsWith('/users') && opts.method === 'GET':
                     return getUsers();
                  default:
                     // pass through any requests not handled above
                     return realFetch(url, opts)
                        .then(response => resolve(response))
                        .catch(error => reject(error));
               }
            }

            // route functions

            function authenticate() {
               const { username, password } = body();
               const user = users.find(x => x.username === username && x.password === password);

               if (!user) return error('Username or password is incorrect');

               return ok({
                  id: user.id,
                  username: user.username,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  token: 'fake-jwt-token'
               });
            }

            function getUsers() {
               if (!isAuthenticated()) return unauthorized();
               return ok(users);
            }

            // helper functions

            function ok(body) {
               resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
            }

            function unauthorized() {
               resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) })
            }

            function error(message) {
               resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
            }

            function isAuthenticated() {
               return opts.headers['Authorization'] === 'Bearer fake-jwt-token';
            }

            function body() {
               return opts.body && JSON.parse(opts.body);
            }
         });
      }
   }
}


// TODO: from https://jasonwatmore.com/post/2021/09/07/react-recoil-jwt-authentication-tutorial-and-example#fetch-wrapper-js

// Fake Backend
// Path: /src/_helpers/fake-backend.js
// In order to run and test the React + Recoil app without a real backend API, the example uses a fake backend that intercepts the HTTP requests from the React app and sends back "fake" responses. This is done by monkey patching the window.fetch() function to return fake responses for a specific set of routes.

// Monkey patching is a technique used to alter the behaviour of an existing function either to extend it or change the way it works. In JavaScript this is done by storing a reference to the original function in a variable and replacing the original function with a new custom function that (optionally) calls the original function before/after executing some custom code.

// The fake backend is organised into a top level handleRoute() function that checks the request url and method to determine how the request should be handled. For fake routes one of the below // route functions is called, for all other routes the request is passed through to the real backend by calling the original fetch request function (realFetch(url, opts)). Below the route functions there are // helper functions for returning different response types and performing small tasks.