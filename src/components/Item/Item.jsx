import React, {useState} from "react"
import Button1 from "../Button1/Button1"
import { Link } from "react-router-dom"
import "./item.css"


function Item(product) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  let classButtonFavorite = 
    isFavorite === true ? "card-favicon favorite" : "card-favicon";

  let urlDetail = `/detalle/${product.id}`

  return (
    <div className='card'>     
        
        <div className="card-detail">
            <h2>{product.title}</h2>
            <div className='card-details'>
            <img src={product.img} alt="producto imagen" />
        </div>
            {/* <p>{product.detail}</p> */}
            <h4>${product.price}</h4>
            {product.discount ? <h4 className="offer">Descuento: {product.discount}%</h4> : <></>}
        </div>
        
       <button onClick={handleFavorite} className={classButtonFavorite}>♥</button><br /><br />
       <Link to={urlDetail}><Button1 color="green">Ver más!</Button1>
        </Link>
    </div>
  )
}

export default Item