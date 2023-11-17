import "./Produto.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import Header from "../../components/Header";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Produto() {
    const { produto_id } = useParams();
    const [produtos, setProdutos] = useState([]);
    const [nomeCategoria, setNomeCategoria] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8090/produtos")
        .then((response) => response.json())
        .then((data) => {
          setProdutos(data);
        })
        .catch((error) => {
          console.error("Erro ao buscar produtos", error);
        });
    }, []);
  
    useEffect(() => {
      fetch("http://localhost:8090/categorias")
        .then((response) => response.json())
        .then((data) => {
          setNomeCategoria(data);
        })
        .catch((error) => {
          console.error("Erro ao buscar as categorias:", error);
        });
    }, []);
  
    useEffect(() => {
      console.log("Produtos", produtos);
      console.log("nome_categoria:", nomeCategoria);
    }, [produto_id, nomeCategoria, produtos]);
  
    const filteredProdutos = produtos.filter(
      (item) => parseInt(item.id_produto, 10) === parseInt(produto_id, 10)
    );
  
    // Supondo que o objeto de produto tenha uma propriedade chamada "id_categoria"
    const filteredCategoria = nomeCategoria.find(
        (categoria) => categoria.id_categoria === parseInt(filteredProdutos[0]?.categoria, 10)
      );
  
    console.log("filteredProdutos: ", filteredProdutos);
    console.log("filteredCategoria:     ", filteredCategoria);


  return (
    <>
      <Header />
      <main className="Produto">
      <h1>
          {filteredCategoria ? filteredCategoria.nome_categoria : "Nenhum produto encontrado"}
        </h1>
        <article>
          <section>
          <input
              type="text"
              placeholder="Categoria"
              value={filteredCategoria ? filteredCategoria.nome_categoria : ""}
              readOnly
            />
            <input
              type="text"
              placeholder="ID"
              value={
                filteredProdutos.length > 0
                  ? filteredProdutos[0].codigo_produto
                  : ""
              }
              readOnly
            />
            <input
              type="text"
              placeholder="Localização"
              value={
                filteredProdutos.length > 0
                  ? filteredProdutos[0].sala
                  : ""
              }
              readOnly
            />
            <input
              type="text"
              placeholder="Estado"
              value={
                filteredProdutos.length > 0
                  ? filteredProdutos[0].estado_produto
                  : ""
              }
              readOnly
            />
          </section>
          <section>
            <input
              className="inputObservacaoProduto"
              type="text"
              placeholder="Observação"
              value={
                filteredProdutos.length > 0
                  ? filteredProdutos[0].comentario_produto
                  : ""
              }
              readOnly
            />
          </section>
        </article>
      </main>
    </>
  );
}

export default Produto;
