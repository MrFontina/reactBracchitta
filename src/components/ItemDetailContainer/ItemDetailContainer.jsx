import React, {useState, useEffect} from 'react'
import {getSingleItemFromApi} from '../../mockService/mockService'

function ItemDetailContainer() {
    const [product, setProduct] = useState([])

    useEffect(
        ()=>{
            getSingleItemFromApi().then(
                (itemsDataBase) => {
                    setProduct(itemsDataBase);
                }        
            )
        }, [] 
    )

    return (
        <div className='card'>
        <div className='card-details'>
            <img src={product.thumbnail} alt="producto imagen" />
        </div>
        <div className="card-detail">
            <h2>{product.title}</h2>
            <p>{product.detail}</p>
            <h4>${product.price}</h4>
        </div>
      
    </div>
    )
}

export default ItemDetailContainer
