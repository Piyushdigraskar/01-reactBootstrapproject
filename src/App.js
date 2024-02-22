import React, { useState } from "react";
import { Navbar, Button, Container, Row, Col } from "react-bootstrap";
import Items from "./Components/Items/Items";
import Cart from "./Components/Carts/Cart";
import CartProvider from "./Store/CartProvider";

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
        <Container className="text-justify-center">
          <Navbar.Brand className="mx-auto" href='/'>Home</Navbar.Brand>
          <Navbar.Brand className="mx-auto">Store</Navbar.Brand>
          <Navbar.Brand className="mx-auto">About</Navbar.Brand>
        </Container>
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
