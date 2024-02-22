import React from "react";

import CartItem from "./CartItem";
import { Container, Button, ListGroup } from "react-bootstrap";
const Dummy_array = [
    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }
]

const Cart = (props) => {
    const cartItems = (
        <ul>
            {Dummy_array.map((item) => {
                return (
                    <CartItem
                        key={item.title} // Add a unique key for each item
                        title={item.title}
                        price={item.price}
                    />
                );
            })}
        </ul>
    );
    return (
        <Container>
            <Button onClick={props.onClose} variant="danger" className="mb-3" bg='light'>X</Button>
            <ListGroup>
                {cartItems}
            </ListGroup>
        </Container>
    );
}

export default Cart;