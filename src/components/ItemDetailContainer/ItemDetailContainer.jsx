import React, {useState, useEffect} from 'react';
import {getSingleItemFromApi} from '../../services/firebase'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';





function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let params = useParams();
    let id = params.id;

    useEffect(
        ()=>{
            getSingleItemFromApi(id).then(
                (itemsDataBase) => {
                    setProduct(itemsDataBase);
                }        
            )
            .catch((error)=>{
                console.error(error);
            })
            .finally(() => setIsLoading(false))
        }, [id] 
    );
    if (isLoading) return <Loader color="red" size={100} speed={1}  />

    return  <ItemDetail product={product}/>;
}

export default ItemDetailContainer
