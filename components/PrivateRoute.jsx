import { Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '_state';

export { PrivateRoute };

function PrivateRoute({ component: Component, ...rest }) {
    const auth = useRecoilValue(authAtom);
    return (
        <Route {...rest} render={props => {
            if (!auth) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            // authorized so return component
            return <Component {...props} />
        }} />
    );
}

// TODO: from https://jasonwatmore.com/post/2021/09/07/react-recoil-jwt-authentication-tutorial-and-example#fetch-wrapper-js

// Private Route
// Path: /src/_components/PrivateRoute.jsx
// The react private route component renders a route component if the user is logged in, if the user isn't logged in they're redirected to the /login page with the return url in the location state property.

// The current logged in (auth) state of the user is retrieved from Recoil with a call to useRecoilValue(authAtom).

