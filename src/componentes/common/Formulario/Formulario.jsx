import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { criarUsuarios } from '../../../api/usuarios.api';

export function Formulario() {

    let {register, handleSubmit} = useForm();
    
    let navigate= useNavigate();

    function tratarSubmit(data){
        console.log(data);
        criarUsuarios(data.nome, data.cpf, data.endereco).then(
            function(aluno){
                console.log(aluno);
                navigate("/usuario");
            }
        ).catch(
            function(error){
                console.log(error);
            }
        )
    }
    
    return (
    <form onSubmit={handleSubmit(tratarSubmit)}>
        Nome: <input {...register("nome")} type="text" />
        <br />
        CPF: <input {...register("cpf")} type="text" />
        <br />
        Endereco: <input {...register("endereco")} type="text" />
        <button type="submit">Enviar</button>
    </form>
  )
}