import React, {useState} from "react"
import Button1 from "../Button1/Button1"
import { Link } from "react-router-dom"
import "./item.css"


function Item(props) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  let classButtonFavorite = 
    isFavorite === true ? "card-favicon favorite" : "card-favicon";

  return (
    <div className='card'>
        <button onClick={handleFavorite} className={classButtonFavorite}>♥</button>
        <div className='card-details'>
            <img src={props.img} alt="producto imagen" />
        </div>
        <div className="card-detail">
            <h2>{props.title}</h2>
            <p>{props.detail}</p>
            <h4>${props.price}</h4>
        </div>
        <Link to="/detalle"><Button1>Ver más!</Button1>
        </Link>
      
    </div>
  )
}

export default Item