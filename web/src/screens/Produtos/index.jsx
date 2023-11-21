import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import Header from "../../components/Header";
import "./Produtos.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

function Produtos() {
    const { categoria_id } = useParams();
    const [nomeCategoria, setNomeCategoria] = useState([]);
    const [produtos, setProdutos] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8090/categorias')
            .then((response) => response.json())
            .then((data) => {
                setNomeCategoria(data);
            })
            .catch((error) => {
                console.error('Erro ao buscar as categorias:', error);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:8090/produtos')
            .then((response) => response.json())
            .then((data) => {
                setProdutos(data);
            })
            .catch((error) => {
                console.error('Erro ao buscar produtos', error);
            });
    }, []);



    useEffect(() => {
        console.log("id_categoria:", categoria_id);
        console.log("nome_categoria:", nomeCategoria);
        console.log("Produtos", produtos);
      }, [categoria_id, nomeCategoria, produtos]);

      const filteredCategorias = nomeCategoria.filter(item => item.id_categoria === parseInt(categoria_id, 10));
      const filteredProdutos = produtos.filter(item => parseInt(item.categoria, 10) === parseInt(categoria_id, 10));
      
      console.log("filteredCategorias: " + filteredCategorias)
      console.log("filteredProdutos: " + filteredProdutos)
      

  return (
    <>
      <Header />
      <main className="Produtos">
        <div>
          <h1>{filteredCategorias.length > 0 ? filteredCategorias[0].nome_categoria : ''}</h1>
          <input
            type="search"
            name="searchProdutos"
            id="searchProdutos"
            placeholder="Pesquisar"
          />
          <div>
            <NavLink to="/Produto">
              <button className="SalaPesquisadaCategorias">
                {filteredCategorias.length > 0 ? filteredCategorias[0].nome_categoria : ''} Pesquisada 1
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink to={`/criarProduto/${filteredCategorias.length > 0 ? filteredCategorias[0].nome_categoria : ''}`}>
              <button className="criarCategoriaCategorias">
                Adicionar {filteredCategorias.length > 0 ? filteredCategorias[0].nome_categoria : ''}
              </button>
            </NavLink>
          </div>
        </div>
        <div className="div2">
              {filteredCategorias.map((categoria, indexCategoria) => (
    <div key={indexCategoria}>
        {filteredProdutos.map((produto, indexProduto) => {
                const buttonText = `${categoria.nome_categoria} ${produto.codigo_produto}`;
                return (
                    <NavLink
                    to={`/produto/${produto.id_produto}`}  // Use o ID do produto na rota
                    key={indexProduto}
                    className='buttonProducts'
                  >
                    <button>
                    {buttonText}

                    </button>
                  </NavLink>
                );

        })}
    </div>
))}
        </div>
      </main>
    </>
  );
}

export default Produtos;
