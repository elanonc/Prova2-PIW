import axios from "axios";

const url_base = "https://6382a6411ada9475c8f10ca8.mockapi.io";

export function criarUsuarios(nome, cpf, endereco){
    console.log({nome,cpf,endereco});
    return axios({
        method:"POST",
        url:url_base+"/usuario",
        data:{
            nome,cpf,endereco
        }
    });
}

export function fetchUsuarios(){
    return axios({
        method: "GET",
        url: url_base+"/usuario",
    })
}