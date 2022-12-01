import React from 'react';
import { Navegador } from '../../common/Navegador/Navegador';
import { DetalhaUsuario } from "../../common/DetalheUsuario/DetalhaUsuario"; 

import { useEffect } from "react";
import { useState } from "react";
import { fetchUsuarios } from '../../../api/usuarios.api';

import api from '../../../api/teste.api';

export function PaginaExibir() {
    let [usuarios, setUsuarios] = useState([]);

    useEffect(() => {    
        fetchUsuarios().then((response) => {
            // console.log(response);
            setUsuarios(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }, []); // usuarios

    return (
        <div className="paginaExibir">
            <Navegador/> 
            <div className="usuarios-container">
                <h1>Relação de Usuarios</h1>
                {usuarios.map(({id, nome, cpf, endereco}) => (
                    <DetalhaUsuario id={id} nome={nome} cpf={cpf} endereco={endereco}/>
                ))}
            </div>
        </div>
    )
}