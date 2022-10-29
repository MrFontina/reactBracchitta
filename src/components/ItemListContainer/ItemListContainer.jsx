import React from 'react'
import products from "../../data/products"

function ItemListContainer() {
      
    return (
        <div>
            {
                products.map(product=>(
                    product.title
                ))
            }
        </div>
            )
}

export default ItemListContainer