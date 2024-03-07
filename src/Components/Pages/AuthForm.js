import React, { useRef, useContext } from "react";
import classes from './AuthForm.module.css'
import AuthContext from "../../Store/AuthContext";

const AuthForm = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    

    const submitHandler = (event)=>{
        console.log('Inside auth');
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (enteredEmail.trim().length === 0) {
            return;
          }

        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3xAw52bOr1fcz2EABZVQ8xdEs9k_qURs`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers: {
            'content-type': 'application/json'
          }
        }
      ).then(res =>{
        if(res.ok){
          return res.json().then(data =>{
            authCtx.login(data.idToken, data.email);
            
          })
        }else{
          return res.json().then((data) => {
            let errorMessage = ' failed';
            // if(data && data.error && data.error.message){
            //   errorMessage = data.error.message;
            // }
            alert(errorMessage);
          });
        }
      }).catch(err =>{
        console.log(err)
      })

    }


    return (
        <section className={classes.auth}>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' ref={emailInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        ref={passwordInputRef}
                        required
                    />
                </div>
                <div className={classes.actions}>
                    <button type="submit">Login</button>
                </div>
            </form>
        </section>

    );
}

export default AuthForm;