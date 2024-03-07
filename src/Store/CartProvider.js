import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import CartContext from "./CartContext";
import AuthContext from "./AuthContext";

const CartProvider = (props) => {
    const authCtx = useContext(AuthContext);
    console.log(authCtx);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (authCtx.userEmail) {
            fetchCartItems(authCtx.userEmail);
        }
    }, [authCtx.userEmail]);

    const fetchCartItems = async (email) => {
        try {
            const response = await axios.get(`https://crudcrud.com/api/4ad6b6cac4674996868eb9bed4f99ae3/${email}`);

            if (response.status !== 200) {
                throw new Error('Failed to fetch cart items!');
            }

            setItems(response.data || [])
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };


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
                
                updateCartOnServer(item);
            }
            
            
            

            return updatedItems;
        });


    };

    const removeItemFromCartHandler = (id) => {
        console.log(id);
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((prevItem) => prevItem.id === id);
    
            if (existingItemIndex !== -1) {
                const removedItem = prevItems[existingItemIndex];
                // Create a new array without the item to be removed
                const updatedItems = prevItems.filter((prevItem) => prevItem.id !== id);
                
                // Return the updated array
                removeItemFromServer(removedItem._id); // Pass the removed item to the server function
                return updatedItems;
            }
            return prevItems;
        });
    }
    
    const removeItemFromServer = async (id) =>{
        console.log(id);
        try {
            const response = await axios.delete(`https://crudcrud.com/api/4ad6b6cac4674996868eb9bed4f99ae3/${authCtx.userEmail}/${id}`);

            if (response.status !== 204) {
                throw new Error('Failed to update cart on server');
            }
        } catch (error) {
            console.error('Error updating cart on server:', error);
        }
    }
    
    const updateCartOnServer = async (updatedItems) => {
        try {
            console.log(updatedItems);
            const response = await axios.post(`https://crudcrud.com/api/4ad6b6cac4674996868eb9bed4f99ae3/${authCtx.userEmail}`, updatedItems );

            if (response.status !== 201) {
                throw new Error('Failed to update cart on server');
            }
        } catch (error) {
            console.error('Error updating cart on server:', error);
        }
    };


    const cartItems = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartItems}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;