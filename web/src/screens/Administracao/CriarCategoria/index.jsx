import './CriarCategoria.css'
import { NavLink } from "react-router-dom";
import logo from '../../../assets/Logo.svg'
import Header from '../../../components/Header';
import { useState, useEffect } from "react";
import axios from "axios";

function CriarCategoria() {


    const [categoria, setCategoria] = useState({})
    const [inputCriar, setInputCriar] = useState({
        nomeInput: "",
    });

    useEffect(() => {
        fetchCategorias();
      }, []);

      const fetchCategorias = async () => {
        try {
          const response = await axios.get("http://localhost:8090/categorias");
          setCategoria(response.data);
        } catch (error) {
          console.log("error", error);
        }
      };

      const handleSubmit = async () => {
        try {
          let novaCategoria = {
            nome_categoria: inputCriar.nomeInput,
          };
          await axios.post("http://localhost:8090/categorias", novaCategoria);
          fetchCategorias();
    
          setInputCriar({
            nomeInput: "",
          });
        } catch (error) {
          console.log("Criar categoria, erro: ", error);
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
        <Header/>
            <main className='CriarCategoria'>
               <h1>Criar Categorias</h1>
               <input
                type="text"
                id="nomeInputCategoria"
                placeholder='Nome:'
                name='nomeInput'
                value={inputCriar.nomeInput}
                onChange={handleInputChange}
              />
               <button onClick={handleSubmit} type="submit">Criar</button>
            </main>
        </>
    )

}

export default CriarCategoria
