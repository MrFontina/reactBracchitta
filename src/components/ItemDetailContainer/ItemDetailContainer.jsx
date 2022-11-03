import React, {useState, useEffect} from 'react'
import {getSingleItemFromApi} from '../../mockService/mockService'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./itemDetail.css"


function ItemDetailContainer() {
    const [product, setProduct] = useState([])

    let params = useParams();
    let id = params.id;

    useEffect(
        ()=>{
            getSingleItemFromApi(id).then(
                (itemsDataBase) => {
                    setProduct(itemsDataBase);
                }        
            )
        }, [id] 
    )

    return (
        
       <div className='item-detail'>
        <div className='item-detail-img'>
            <img src={product.thumbnail} alt="producto imagen" />
        </div>
        <div className="item-detail-data">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
           <ItemCount stock={product.stock} /> 
        </div>
        
      
    </div>
    
        
 
    )
}

export default ItemDetailContainer
