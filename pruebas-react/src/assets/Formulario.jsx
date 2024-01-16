/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const Formulario = ({ value }) => {
  const [nombre, SetNombre] = useState(value);
  const cambiarNombre = (e) => {
    const value = e.target.value;
    SetNombre(value);
  };

  return (
    <>
      <h1>Formulario</h1>
      <label>nombre: </label>
      <input
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={cambiarNombre}
      />
    </>
  );
};
