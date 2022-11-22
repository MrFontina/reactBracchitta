import InputForm from "./InputForm";
import { useState } from "react";

import React from 'react'

function BuyForm(props) {
    const [userData, setUserData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        direccion: "",
    });

    

    function onInputChange(evt) {
        const inputName = evt.target.name;
        const value = evt.target.value;

        const newUserData = {...userData};
        newUserData[inputName] = value;
        setUserData(newUserData)
    }

    function onSubmit(evt){
        evt.preventDefault();
        props.onSubmit(userData);
    }

  return (
    <form onSubmit={onSubmit}>
       <InputForm
        required
        title="Nombre"
        name="nombre"
        value={userData.name}
        onInputChange={onInputChange}
      />
      <InputForm
        required
        title="Email"
        name="email"
        value={userData.email}
        onInputChange={onInputChange}
      />
      <InputForm
        required
        title="Teléfono"
        name="telefono"
        value={userData.phone}
        onInputChange={onInputChange}
      />
      <InputForm
        required
        title="Dirección"
        name="direccion"
        value={userData.phone}
        onInputChange={onInputChange}
      />

<button style={{ backgroundColor: "green" }} onClick={onSubmit}>Crear orden</button>
    </form>
    
  )
}

export default BuyForm