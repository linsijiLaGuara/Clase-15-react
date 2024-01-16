import React from "react";
import ReactDOM from "react-dom/client";
import {CouterAPP} from "./CouterAPP";
import {Formulario} from "./Formulario"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CouterAPP value={0}/>
    <Formulario value={'emiliano'}></Formulario>
  </React.StrictMode>
);
