import React, { useState } from "react"
import Items from '../Items/Items';
import Cart from '../Carts/Cart';
import CartProvider from "../../Store/CartProvider";
import {Row, Col, Container, Button, Navbar} from 'react-bootstrap';

const Store = () => {
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
    )
}

export default Store