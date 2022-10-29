import React from 'react'
import products from "../../data/products"
import "../Item/Item"
import Item from '../Item/Item'

function ItemListContainer(props) {

    return (
        <div>

            {products.map((product) => (<Item
                key={product.id}
                title={product.title}
                detail={product.description}
                price={product.price}
                img={product.thumbnail}
                stock={product.stock}

            />)
            )}
        </div>



    )
}

export default ItemListContainer



