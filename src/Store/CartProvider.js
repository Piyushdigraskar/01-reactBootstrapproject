import React,{useState} from "react";

import CartContext from "./CartContext";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const addItemToCartHandler = (item) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((prevItem) => prevItem.id === item.id);
            const updatedItems = [...prevItems];
    
            if (existingItemIndex !== -1) {
                // If the item already exists in the cart, increase its quantity
                updatedItems[existingItemIndex].amount += 1;
            } else {
                // If the item is new, add it to the cart
                updatedItems.push({ ...item });
            }
    
            return updatedItems;
        });
    
    };
    
    const removeItemFromCartHandler = (id)=>{
        setItems((prevItems)=>{
            const existingItemIndex = prevItems.findIndex((prevItem) => prevItem.id === id);

            if (existingItemIndex !== -1) {
                // Create a new array without the item to be removed
                const updatedItems = prevItems.filter((_, index) => index !== existingItemIndex);
                
                // Return the updated array
                return updatedItems;
            }
            return prevItems;
        })

    }

    const cartItems = {
        items:items,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartItems}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;