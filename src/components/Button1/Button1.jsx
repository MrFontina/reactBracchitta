import React from 'react'
import './button1.css'


function Button1(props) {
  
    let buttonStyle = { backgroundColor: props.color, 
                        fontSize: props.size, 
                        width: props.width,
                        fontWeight: props.weight,
                        
                    }
    return <button  className="button1" onClick={props.onClick} style={buttonStyle}>{props.children}</button>
  
}

export default Button1