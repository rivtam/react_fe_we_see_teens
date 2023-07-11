import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '_state';
import { useUserActions } from '_actions';

function Nav() {
    const auth = useRecoilValue(authAtom);
    const userActions = useUserActions();

    // only show nav when logged in
    if (!auth) return null;
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
                <a onClick={userActions.logout} className="nav-item nav-link">Logout</a>
            </div>
        </nav>
    );
}

export { Nav };

// TODO: from https://jasonwatmore.com/post/2021/09/07/react-recoil-jwt-authentication-tutorial-and-example#fetch-wrapper-js

// Nav Component
// Path: /src/_components/Nav.jsx
// The nav component displays the primary bar in the example. The component gets the current auth data from global Recoil state by calling useRecoilValue(authAtom) and only displays the nav if the user is logged in.

// The react router NavLink component automatically adds the active class to the active nav item so it is highlighted in the UI.