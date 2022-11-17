import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { getItemsFromApiByCategory } from '../../mockService/mockService'
import { getItemsFromApi } from '../../services/firebase'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
    let [productsList, setProductsList] = useState([])

    const { categoryid } = useParams();
    
 
    useEffect(
        ()=>{
            if (categoryid){
                getItemsFromApiByCategory(categoryid).then(
                    (itemsDataBase) => {
                        setProductsList(itemsDataBase);
                    }        
                )
            
            }
            else {
                getItemsFromApi().then(
                (itemsDataBase) => {
                    setProductsList(itemsDataBase);
                }        
            )
            }
            
        }, [categoryid]
    )

    return  <ItemList productsList={productsList} />
       
}

export default ItemListContainer



