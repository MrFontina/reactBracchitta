import React, {useState, useEffect} from 'react';
import {getSingleItemFromApi} from '../../services/firebase'
import { useParams, useNavigate } from 'react-router-dom'
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';






function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

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
                navigate("/notfound")
                })
            .finally(() => setIsLoading(false))
        }, [id, navigate] 
    );
    if (isLoading) return <Loader color="red" size={100} speed={1}  />

    return  <ItemDetail product={product}/>;
}

export default ItemDetailContainer
