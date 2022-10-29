import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import getItemsFromApi from '../../mockService/mockService'

function ItemListContainer() {
    let [productsList, setProductsList] = useState([])

    useEffect(
        ()=>{
            getItemsFromApi().then(
                (itemsDataBase) => {
                    setProductsList(itemsDataBase);
                }        
            )
        }, []
    )

    return (
        <div>
            <ItemList productsList={productsList} />
        </div>



    )
}

export default ItemListContainer



