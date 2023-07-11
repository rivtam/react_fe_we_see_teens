
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { authAtom, usersAtom } from '_state';
import { useUserActions } from '_actions';

export { Home };

function Home() {
    const auth = useRecoilValue(authAtom);
    const users = useRecoilValue(usersAtom);
    const userActions = useUserActions();

    useEffect(() => {
        userActions.getAll();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Hi {auth?.firstName}!</h1>
            <p>You're logged in with React + Recoil & JWT!!</p>
            <h3>Users from secure api end point:</h3>
            {users &&
                <ul>
                    {users.map(user =>
                        <li key={user.id}>{user.firstName} {user.lastName}</li>
                    )}
                </ul>
            }
            {!users && <div className="spinner-border spinner-border-sm"></div>}
        </div>
    );
}

// TODO: https://jasonwatmore.com/post/2021/09/07/react-recoil-jwt-authentication-tutorial-and-example#fetch-wrapper-js

// Path: /src/home/Home.jsx
// The home page is displayed after signing in to the application, it shows the signed in user's name plus a list of all users in the tutorial application. The users are loaded into Recoil state by calling userActions.getAll() from the useEffect() hook function, see how the users are fetched and the Recoil state is updated in user actions.

// Recoil state values are retrieved for auth and users data with the help of the useRecoilValue() hook function.
