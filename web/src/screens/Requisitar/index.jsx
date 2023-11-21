import "./Requisitar.css";
import { NavLink } from "react-router-dom";
import Editar from "../../assets/Editar.svg";
import Lixeira from "../../assets/Lixeira.svg";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function Requisitar() {
  const [requisito, setRequisito] = useState({});
  const [inputCriar, setInputCriar] = useState({
    nomeInput: "",
    atividadeInput: "",
    categoriaInput: "",
    salaInput: "",
    observacaoInput: "",
  });

  useEffect(() => {
    fetchRequisito();
  }, []);

  const fetchRequisito = async () => {
    try {
      const response = await axios.get("http://localhost:8090/requisitar");
      setRequisito(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async () => {
    try {
      let novoRequisito = {
        nome: inputCriar.nomeInput,
        atividade: inputCriar.atividadeInput,
        categoria: inputCriar.categoriaInput,
        sala: inputCriar.salaInput,
        observacao: inputCriar.observacaoInput,
      };
      await axios.post("http://localhost:8090/requisitar", novoRequisito);
      fetchRequisito();

      setInputCriar({
        nomeInput: "",
        atividadeInput: "",
        categoriaInput: "",
        salaInput: "",
        observacaoInput: "",
      });
    } catch (error) {
      console.log("Erro criando requisito: ", error);
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
      <main className="Requisitar">
        <div>
          <h1>Requisitar</h1>
          <p>Registre as informações sobre o item desejado</p>
          <div>
            <NavLink to="/emFalta">
              <button
                onClick={handleSubmit}
                type="submit"
                className="requisitoButtonRequisitar"
              >
                Requisitar
              </button>
            </NavLink>
          </div>
        </div>
        <div className="div2">
            <input
              type="text"
              placeholder="Nome Completo"
              name="nomeInput"
              value={inputCriar.nomeInput}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Atividade (ex:Professor)"
              name="atividadeInput"
              value={inputCriar.atividadeInput}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Categoria do Item"
              name="categoriaInput"
              value={inputCriar.categoriaInput}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Sala"
              name="salaInput"
              value={inputCriar.salaInput}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Observação"
              name="observacaoInput"
              value={inputCriar.observacaoInput}
              onChange={handleInputChange}
            />
        </div>
      </main>
    </>
  );
}

export default Requisitar;
