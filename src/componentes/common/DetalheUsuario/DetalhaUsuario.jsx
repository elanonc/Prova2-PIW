import React from 'react';

export function DetalhaUsuario({ id, nome, cpf, endereco }) {
  return (
    <div className="detalha-usuario">
        <ul>
            <li key={id}>
                <b>Nome:</b>{nome}<br/>
                <b>CPF:</b>{cpf}<br/>
                <b>Endereco:</b>{endereco}<br/>
            </li>
        </ul>
    </div>
  )
}
