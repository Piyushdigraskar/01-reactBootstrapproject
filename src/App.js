import React, { useState } from "react";
import { Navbar, Button, Container, Row, Col } from "react-bootstrap";
import Items from "./Components/Items/Items";
import Cart from "./Components/Carts/Cart";
import CartProvider from "./Store/CartProvider";
import About from "./Components/Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Pages/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/about', element: <About /> },
    ],
  }
]);


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
  <CartProvider>
      <Navbar bg='dark' variant='dark' expand='lg' className="mb-4">
        <RouterProvider router={router}></RouterProvider>
        <Button onClick={showCartHandler} variant='outline-info' className="ml-auto">Cart</Button>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Items />
          </Col>
          {cartIsShown && (
            <Col md={3} className="ml-auto">
              <Cart onClose={hideCartHandler} />
            </Col>
          )}
        </Row>
      </Container>
    </CartProvider>
  );
}



export default App;
