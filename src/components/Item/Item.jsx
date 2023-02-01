import React, { useState } from "react"
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

  let stylePrice = { color: product.discount ? 'green' : 'inherit' }

  return (
    <div className='card'>
      <div className="cardContent">
        <div className="cardTop">
          <h2>{product.title}</h2>
          <div className='card-details'>
            <Link to={urlDetail}><img src={product.img} alt="producto imagen" /></Link>
          </div>
          <h4 style={stylePrice}>${product.price}</h4>
        </div>
        <div className="cardBottom">
          {product.discount ? <h4 className="offer">Descuento: {product.discount}%</h4> : <></>}
        <button onClick={handleFavorite} className={classButtonFavorite}>♥</button><br /><br />
        <Link to={urlDetail}><Button1 className="btnVer" width="100px" weight="bold"  size="14px" color="MediumAquaMarine">VER MÁS</Button1></Link>
        </div>
        
      </div>
    </div>
  )
}

export default Item