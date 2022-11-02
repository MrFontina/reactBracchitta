import React from 'react'
import FlexContainer from "../FlexContainer/FlexContainer"
import Item from "../Item/Item"

function ItemList(props) {
  return (
    <FlexContainer>
      {props.productsList.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          title={product.title}
          detail={product.description}
          price={product.price}
          img={product.thumbnail}
          stock={product.stock}         
        />
      ))}
    </FlexContainer>
  );
}

export default ItemList