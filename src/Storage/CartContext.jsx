import { createContext, useState } from "react";

const cartContext = createContext();


export function CartContextProvider(props) {

    const [cart, setCart] = useState([]);
    const [orderId, setOrderId] = useState("")


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
        }}

    function totalItemsInCart() {
        let total = 0;
        cart.forEach(itemInCart => {
            total = total + itemInCart.cantidad;
        });
        return total
    }


    function totalPriceInCart() {
        let totalPrice = 0;
        cart.forEach(itemInCart => {
            totalPrice = (itemInCart.cantidad * itemInCart.price) + totalPrice
        })
        return totalPrice
    }

    function removeItem(itemData) {
        const newCart = cart.filter(item => item.id !== itemData)
        setCart(newCart)
    }



    function clearCart() {
        const newCart = [];
        setCart(newCart)
    }


    function buyOrderId(buyId) {
        const newId = buyId;
        setOrderId(newId)
    }


    const value = {
        cart,
        addToCart,
        totalItemsInCart,
        removeItem,
        clearCart,
        totalPriceInCart,
        buyOrderId,
        orderId
    };

    return (
        <cartContext.Provider value={value}>{props.children} </cartContext.Provider>
    )
}

export default cartContext