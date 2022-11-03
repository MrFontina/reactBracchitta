import React, {useState, useEffect} from 'react'
import {getSingleItemFromApi} from '../../mockService/mockService'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


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
        <div >
        <div className='card-detail-img'>
            <img src={product.thumbnail} alt="producto imagen" />
        </div>
        <div className="card-detail">
            <h2>{product.title}</h2>
            <p>{product.detail}</p>
            <h4>${product.price}</h4>
        </div>
        <ItemCount stock={product.stock} />
      
    </div>
    )
}

export default ItemDetailContainer
