import React from "react";
import { Container, Button } from "react-bootstrap";

const CartItem = (props) => {
    console.log(props.amount);
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
             <Container className="justify-content-center">
                <h4>{props.title} - </h4>
                <h4>{props.price}</h4>
                <span className="badge bg-primary">{props.amount}</span>
            </Container>
                
                <Button variant="success" onClick={props.onAdd}>Add</Button>
                <Button variant="danger" onClick={props.onRemove}>Remove</Button>
            </li>
       
    )
}

export default CartItem;
