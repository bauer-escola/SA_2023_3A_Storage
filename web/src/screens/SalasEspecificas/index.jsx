// SalasEspecificas.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './SalasEspecificas.css';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header';
import LetraSala from '../../components/Salas/Salas';

function SalasEspecificas() {
  const { letra } = useParams(); // Obtém o parâmetro da URL

  const salas = LetraSala().filter((sala) => sala.letra_sala === letra);

  return (
    <>
      <Header />
      <main className="SalasEspecificas">
        <div>
          <h1>{`Salas ${letra}`}</h1>
          <input type="search" name="searchSalasEspecificas" id="searchSalasEspecificas" placeholder="Pesquisar" />
          <div>
            {/* Exemplo de botão com NavLink */}
            <NavLink to={`/Sala/${letra}`}>
              <button>{`Sala ${letra} Pesquisada 1`}</button>
            </NavLink>
          </div>
        </div>
        <div className="div2">
          {salas.map((sala) => (
            <NavLink key={sala.id_sala} to={`/Sala/${sala.id_sala}`}>
              <button>{`Sala ${sala.nome_sala}`}</button>
            </NavLink>
          ))}
        </div>
      </main>
    </>
  );
}

export default SalasEspecificas;