import React, { useContext } from "react";
import AuthContext from "../../Store/AuthContext";
import classes from './MainNav.module.css'
import { Link } from "react-router-dom";


const MainNav = () => {
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedin;

    const LogoutHandler = () => {
        authCtx.logout();
    }

    return (
        <header className={classes.header}>
            <Link to='/'>
                <div className={classes.logo}>E-Com</div>
            </Link>
            <nav>
                <ul>
                    {!isLoggedIn && <li>
                        <Link to='/auth'>Login</Link>
                    </li>}
                    {isLoggedIn && <li>
                        <button onClick={LogoutHandler}>Logout</button>
                    </li>}
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;