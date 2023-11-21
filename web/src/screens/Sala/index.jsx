import "./Sala.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Sala() {
  const { sala_id } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const navigate = useNavigate();

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
    fetch("http://localhost:8090/produtos")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os produtos:", error);
      });
  }, []);

  useEffect(() => {
    console.log("produtos:", produtos);
    console.log("nome_categoria:", nomeCategoria);
  }, [produtos, nomeCategoria]);

  const filteredProdutos = produtos.filter(
    (item) => String(item.sala) === sala_id
  );
  const CategoriasFiltradas = filteredProdutos.map((produto) => {
    const categoriaEncontrada = nomeCategoria.find(
      (categoria) => categoria.id_categoria === parseInt(produto.categoria, 10)
    );
    return categoriaEncontrada ? categoriaEncontrada.nome_categoria : null;
  });

  console.log("filteredProdutos:", filteredProdutos);
  console.log("CategoriasFiltradas:", CategoriasFiltradas);

  return (
    <>
      <Header />
      <main className="Sala">
        <div>
          <h1>Sala {sala_id}</h1>
          <input
            type="search"
            name="searchSala"
            id="searchSala"
            placeholder="Pesquisar"
          />
          <div>
            <NavLink to="/">
              <button>Categoria pesquisada na sala {sala_id}</button>
            </NavLink>
          </div>
        </div>
        <div className="div2">
          {filteredProdutos.map((produto, index) => {
            const categoriaFiltrada = CategoriasFiltradas[index];
            return (
              <div key={index}>
                <button
                  className="buttonProducts"
                  onClick={() => navigate(`/produto/${produto.id_produto}`)}
                >
                  {(categoriaFiltrada ? ` ${categoriaFiltrada}` : "") +
                    " " +
                    produto.codigo_produto}
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Sala;
