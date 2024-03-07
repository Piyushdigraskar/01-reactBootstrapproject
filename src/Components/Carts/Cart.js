import React,{useContext} from "react";

import CartItem from "./CartItem";
import CartContext from "../../Store/CartContext";
import { Container, Button, ListGroup } from "react-bootstrap";


const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    console.log(cartCtx);
    const cartItemAddHandler = (item)=>{
        cartCtx.addItem(item);
    }

    const cartItemremoveHandler = (id)=>{
        cartCtx.removeItem(id);
    }


    const cartItems = (
        <ul>
            {cartCtx.items.map((item) => {
                console.log(item.amount)
                return (
                    <CartItem
                        key={item.id}
                        id={item.id} // Adding a unique key for each item
                        title={item.title}
                        price={item.price}
                        amount={item.amount}
                        onAdd={() => cartItemAddHandler(item)}
                        onRemove={()=>cartItemremoveHandler(item.id)}
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