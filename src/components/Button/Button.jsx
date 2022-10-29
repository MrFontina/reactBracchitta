import React, {useState} from "react";
import "./button.css";

import React from 'react'

function Button(props) {
    let [ colorState, setColorState ] = useState({ backgroundColor: props.color });

    function handleClick(){
        setColorState({ backgroundColor: "#cc76cc"} )
    }

  return (
    <button onClick={handleClick} style={colorState} className="btn">
        {props.children}
    </button>
  )
}

export default Button;