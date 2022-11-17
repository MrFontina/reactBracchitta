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


    function totalPriceInCart(){
        let totalPrice = 0;
        cart.forEach(itemInCart =>{
            totalPrice = (itemInCart.cantidad * itemInCart.price) + totalPrice
        })
        return totalPrice
    }

    function removeItem(itemData){
        // cart.filter()
        let itemFound = cart.filter(itemData.id)      
        let newCart = cart.splice(itemFound) 
        
        
        
        
        setCart(newCart)
        
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
        totalPriceInCart,

    };

    return (
        <cartContext.Provider value={value}>{props.children} </cartContext.Provider>

    )
}

export default cartContext