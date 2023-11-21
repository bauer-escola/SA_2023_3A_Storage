import "./CriarProduto.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import Header from "../../../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CriarProduto() {

  const { categoria } = useParams();
  const [produto, setProduto] = useState({});
  const [inputCriar, setInputCriar] = useState({
    codigoInput: "",
    comentarioInput: "",
    estadoInput: "",
    categoriaInput: "",
    salaInput: "",
  });
  const [listaCategorias, setListaCategorias] = useState([]);


  useEffect(() => {
    fetchProdutos();
    fetchCategorias();
  }, []);

  const fetchCategorias = async () => {
    try {
      const response = await axios.get("http://localhost:8090/categorias");
      setListaCategorias(response.data);
    } catch (error) {
      console.log("Erro ao buscar categorias: ", error);
    }
  };

  const fetchProdutos = async () => {
    try {
      const response = await axios.get("http://localhost:8090/produtos");
      setProduto(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async () => {
    try {
      let novaproduto = {        
        codigo_produto: inputCriar.codigoInput,
        comentario_produto: inputCriar.comentarioInput,
        estado_produto: inputCriar.estadoInput,
        categoria: inputCriar.categoriaInput,
        sala: inputCriar.salaInput, 
        
      };
      await axios.post("http://localhost:8090/produtos", novaproduto);
      fetchProdutos();

      setInputCriar({
        codigoInput: "",
        comentarioInput: "",
        estadoInput: "",
        categoriaInput: "",
        salaInput: "",
      });
    } catch (error) {
      console.log("Criar produto, erro: ", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputCriar((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <main className="CriarProduto">
        <h1>Criar {categoria}</h1>
        <article>
          <section>
          <input
            type="text"
            id="nomeInputCategoria"
            placeholder="Codigo"
            name="codigoInput"
            value={inputCriar.codigoInput}
            onChange={handleInputChange}
          />
            <input
              type="text"
              id="nomeInputCategoria"
              placeholder="Estado:"
              name="estadoInput"
              value={inputCriar.estadoInput}
              onChange={handleInputChange}
            />
             <input
              type="text"
              id="nomeInputCategoria"
              placeholder="Sala:"
              name="salaInput"
              value={inputCriar.salaInput}
              onChange={handleInputChange}
            />
            
              <select
              name="categoriaInput"
              className="categoriaInput"
              value={inputCriar.categoriaInput}
              onChange={handleInputChange}
            >
              <option value="">Selecione a categoria</option>
              {listaCategorias.map((categoria) => (
                <option
                  key={categoria.id_categoria}
                  value={categoria.id_categoria}
                >
                  {categoria.nome_categoria}
                </option>
              ))}
            </select>
            
          </section>
          <section className="ObservacaoInput">
            <input
              type="text"
              id="nomeInputCategoria"
              placeholder="Observação:"
              name="comentarioInput"
              value={inputCriar.comentarioInput}
              onChange={handleInputChange}
            />
          </section>
        </article>
        <button onClick={handleSubmit} type="submit">Criar</button>
      </main>
    </>
  );
}

export default CriarProduto;
