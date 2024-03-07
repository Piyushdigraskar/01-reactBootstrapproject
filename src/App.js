import React, { Fragment, useContext } from "react";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Store from "./Components/Pages/Store";
import Header from "./Components/Layout/Header";
import Product from "./Components/Pages/Product";
import Contact from "./Components/Pages/Contact";
import StartingPageContent from "./Components/Pages/StartingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthForm from "./Components/Pages/AuthForm";
import AuthContext from "./Store/AuthContext";


function App() {
  const authCtx = useContext(AuthContext);

  console.log('inside app',authCtx);
  async function addHandler(info) {
    const response = await fetch('https://react-apiproject-default-rtdb.asia-southeast1.firebasedatabase.app/contacts.json', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'content-type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
  }

  return (
    <Fragment>
      <Header>
      </Header>
      <Switch>
        <Route path='/' exact>
          <StartingPageContent></StartingPageContent>
        </Route>
        <Route path='/store' >
        {authCtx.isLoggedin && <Store />}
        {!authCtx.isLoggedin && <Redirect to='/auth'></Redirect>}
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/auth'>
          {!authCtx.isLoggedin && <AuthForm />}
          {authCtx.isLoggedin && <Redirect to='/store'></Redirect>}
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/product/:productId'>
        {authCtx.isLoggedin && <Product />}
        {!authCtx.isLoggedin && <Redirect to='/auth'></Redirect>}
        </Route>
        <Route path='/contact'>
          <Contact onAdd={addHandler} />
        </Route>

      </Switch>
    </Fragment>
  );
}



export default App;
