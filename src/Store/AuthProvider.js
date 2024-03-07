import React, {useState} from "react";
import AuthContext from "./AuthContext";

const sanitizeEmail = (email) => {
    // Remove '@' and '.' characters from the email address
    return email.replace(/[@.]/g, '');
};


const AuthProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const initialEmail = localStorage.getItem('email');
    const [token, setToken] = useState(initialToken);
    const [email, setemail] = useState(initialEmail);


    const userLoggedIn = !!token;

    const loginHandler = (token, email) => {

        let newEmail = sanitizeEmail(email);
        setToken(token);
        setemail(newEmail);
        localStorage.setItem('token', token);
        localStorage.setItem('email', newEmail);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');

    }

    const contextValue = {
        token: token,
        login: loginHandler,
        logout: logoutHandler,
        isLoggedin:userLoggedIn,
        userEmail:email
        
    }
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>

}

export default AuthProvider;

