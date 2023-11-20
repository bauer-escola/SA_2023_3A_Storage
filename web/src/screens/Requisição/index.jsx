import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Requisicao.css";
import Header from "../../components/Header";

function Requisicao() {
  const { id } = useParams();
  const [requisicao, setRequisicao] = useState({});

  // Função assíncrona para buscar todos os dados
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8090/requisitar");
      const data = await response.json();

      // Filtra os dados para encontrar o item com o ID correspondente
      const requisicaoEncontrada = data.find(item => item.id === parseInt(id));

      if (requisicaoEncontrada) {
        setRequisicao(requisicaoEncontrada);
      } else {
        console.error("Requisição não encontrada");
      }
    } catch (error) {
      console.error("Erro ao buscar Requisicao", error);
    }
  };

  // UseEffect para chamar a função fetchData
  useEffect(() => {
    fetchData();
  }, [id]); // Execute sempre que o id muda

  return (
    <>
      <Header />
      <main className="Requisicao">
        <h1>{"Requisição de: " + " " + requisicao.categoria}</h1>
        <article>
          <section>
            <div>
              <h4>Requisição por:</h4>
              <input type="text" placeholder="Nome" value={requisicao.nome || ""} readOnly />
            </div>
            <div>
              <h4>Atividade:</h4>
              <input type="text" placeholder="Funcionário" value={requisicao.atividade || ""} readOnly />
            </div>
            <div>
              <h4>Categoria:</h4>
              <input type="text" placeholder="Teclado" value={requisicao.categoria || ""} readOnly />
            </div>
            <div>
              <h4>Sala:</h4>
              <input type="text" placeholder="F12" value={requisicao.sala || ""} readOnly />
            </div>
          </section>
          <section>
            <h4>Observação:</h4>
            <input
              className="inputObservacaoRequisicao"
              type="text"
              placeholder="Observação"
              value={requisicao.observacao || ""}
              readOnly
            />
          </section>
        </article>
      </main>
    </>
  );
}

export default Requisicao;