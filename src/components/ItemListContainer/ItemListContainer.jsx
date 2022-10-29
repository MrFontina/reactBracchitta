import React from 'react'
import products from "../../data/products"
import "../Item/Item"

function ItemListContainer(props) {

    return (
        <div>
            {products.map(product=>
                
                product.title
                )}
           
        </div>
    )
}

export default ItemListContainer



