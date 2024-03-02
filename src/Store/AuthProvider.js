import React, {useState} from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
    const [token, setToken] = useState(null);

    const userLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token')

    }

    const contextValue = {
        token: token,
        login: loginHandler,
        logout: logoutHandler,
        isLoggedin:userLoggedIn
    }
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>

}

export default AuthProvider;

