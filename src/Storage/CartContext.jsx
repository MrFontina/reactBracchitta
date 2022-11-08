import { createContext, useState } from "react";

const cartContext = createContext();



export function CartContextProvider(props) {

    const [cart, setCart] = useState([]);


    function addToCart(itemData) {
        let itemFound = cart.find(itemInCart => itemInCart.id === itemData.id)

        if (itemFound) {
            let newCart = cart.map((itemInCart) => {
                if (itemInCart.id === itemData.id) {
                    itemInCart.cantidad += itemData.cantidad;
                    return itemInCart
                }
                else {
                    return itemInCart
                }
            })
            setCart(newCart)

        }
        else {
            const newCart = [...cart];
            newCart.push(itemData);
            setCart(newCart);
        }





    }

    function totalItemsInCart() {
        let total = 0;
        cart.forEach(itemInCart => {
            total = total + itemInCart.cantidad;
        });
        return total
    }


    function removeItem(itemId){
        cart.filter()
    }

    function clearCart(){
        const newCart = [];
        setCart(newCart)
        
    }


    const value = {
        cart,
        addToCart,
        totalItemsInCart,
        removeItem,
        clearCart,

    };

    return (
        <cartContext.Provider value={value}>{props.children} </cartContext.Provider>

    )
}

export default cartContext