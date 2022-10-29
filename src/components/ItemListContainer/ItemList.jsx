import Item from "../Item/Item"

import React from 'react'

function ItemList(props) {
  return (
    <div>
         {props.productsList.map((product) => (
         <Item
                key={product.id}
                title={product.title}
                detail={product.description}
                price={product.price}
                img={product.thumbnail}
                stock={product.stock}
            />
            ))}
    </div>
  )
}

export default ItemList