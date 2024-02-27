import React from "react";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Store from "./Components/Pages/Store";
import Header from "./Components/Layout/Header";
import Contact from "./Components/Pages/Contact";
import { Route, Switch } from "react-router-dom";


function App() {
  console.log('inside app');
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
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/contact'>
            <Contact onAdd={addHandler} />
          </Route>
          <Route path='/'>
            <Store />
          </Route>
        </Switch>
      </main>
    </div>
  );
}



export default App;
