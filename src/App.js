import React from "react";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Store from "./Components/Pages/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Pages/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Store /> },
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> }
    ],
  }
]);


function App() {
  

  return (
  
        <RouterProvider router={router}>
      </RouterProvider>

  );
}



export default App;
