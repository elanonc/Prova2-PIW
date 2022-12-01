import React from 'react';
import { NavLink } from "react-router-dom";

import "./Navegador.css"

export function Navegador() {
  return (
    <div className="navegador">
        <div className="links">
            <NavLink end to="/usuario">Mostrar</NavLink>
            <NavLink end to="/usuario/create">Cadastro</NavLink> 
        </div>
    </div>
  )
}

