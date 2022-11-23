import React from 'react'
import "./button1.css"

function Button1(props) {
  
    let buttonStyle = { backgroundColor: props.color, fontSize: props.size, width: props.width }
    return <button onClick={props.onClick} style={buttonStyle}>{props.children}</button>
  
}

export default Button1