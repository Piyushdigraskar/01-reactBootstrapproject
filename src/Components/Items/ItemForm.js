import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import Input from "../UI/Input";

import CartContext from "../../Store/CartContext";

const ItemForm = (props)=>{

    const cartCtx = useContext(CartContext);

    const submitHandler = (event)=>{
        event.preventDefault();

        const enteredAmount = parseInt(event.target.amount.value);
        if (enteredAmount <= 0 || enteredAmount > 5) {
            return;
        }
        
        cartCtx.addItem({
            id:props.id,
            title:props.title,
            price:props.price,
            amount:enteredAmount
        })
        console.log(cartCtx.items);


    }
    return <form  onSubmit={submitHandler}>
    <Input label="Amount" input={{
        id:"amount",
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }}></Input>
    <Button variant="primary" type="submit">Add To Cart</Button>

</form>
}


export default ItemForm;