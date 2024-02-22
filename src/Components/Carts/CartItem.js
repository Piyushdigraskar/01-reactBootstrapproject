import React from "react";
import { Container, Button } from "react-bootstrap";

const CartItem = (props) => {
    return (
        <Container className="justify-content-center">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <h2>{props.title} - </h2>
                <h2>{props.price}</h2>
                <span className="badge badge-primary badge-pill">{props.price}</span>
                <Button variant="danger">Remove</Button>
            </li>
        </Container>
    )
}

export default CartItem;
