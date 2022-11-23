import React from 'react'


function Button1(props) {
  
    let buttonStyle = { backgroundColor: props.color, 
                        fontSize: props.size, 
                        width: props.width,
                        fontWeight: props.weight
                    }
    return <button onClick={props.onClick} style={buttonStyle}>{props.children}</button>
  
}

export default Button1