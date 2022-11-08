import { createContext, useState } from "react";

const cartContext = createContext();



export function CartContextProvider(props) {

    const [cart, setCart] = useState([]);


    function addToCart(itemData){
            const newCart = [...cart];
            newCart.push(itemData);
            setCart(newCart);
    }

    function totalItemsInCart(){
        let total = 0;
        cart.forEach( itemInCart => {
            total = total + itemInCart.cantidad;
        });
        return total
    }

    const value = {
        cart,
        addToCart,
        totalItemsInCart,
        
    };

    return (
        <cartContext.Provider value={value}>{props.children} </cartContext.Provider>

    )
}

export default cartContext