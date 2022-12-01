import { useState } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PaginaExibir } from './componentes/pages/PaginaExibir/PaginaExibir';
import { PaginaCadastro } from './componentes/pages/PaginaCadastro/PaginaCadastro';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/usuario" element={<PaginaExibir/>}/>
          <Route path="/usuario/create" element={<PaginaCadastro/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}