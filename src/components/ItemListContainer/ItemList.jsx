import React from 'react'
import FlexContainer from "../FlexContainer/FlexContainer"
import Item from "../Item/Item"
import Loader from '../Loader/Loader';

function ItemList(props) {
  let emptyArray = props.productsList.length === 0;
  return (
     <FlexContainer>
      {emptyArray ? (<Loader color="red" size={100} speed={1} />) : (

        props.productsList.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          title={product.title}
          detail={product.description}
          price={product.price}
          img={product.thumbnail}
          stock={product.stock}   
          discount={product.discount}      
        />
      ))
      )}

      
    </FlexContainer>
  );
}

export default ItemList