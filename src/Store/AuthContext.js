import React from "react";

const AuthContext = React.createContext({
    token:'',
    userEmail:'',
    isLoggedin:false,
    login: (token, email)=>{},
    logout:()=>{}
})

export default AuthContext;