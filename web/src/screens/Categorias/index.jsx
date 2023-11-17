import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Categorias.css'

function Categorias() {
    const [categorias, setCategorias] = useState([]);
    const navigateTo = useNavigate(); // useNavigate hook

    useEffect(() => {
        fetch('http://localhost:8090/categorias')
            .then((response) => response.json())
            .then((data) => {
                setCategorias(data);
            })
            .catch((error) => {
                console.error('Erro ao buscar as categorias:', error);
            });
    }, []);

    const navigateToProducts = (categoria) => {
        navigateTo(`/produtos/${categoria.id_categoria}`);
    };

    
    
    return (
        
        <>
        <Header/>
            <main className='Categorias'>
                <div>
                    <h1>Categorias</h1>
                    <input type="search" name="searchCategorias" id="searchCategorias" placeholder='Pesquisar' />
                    <div>
                            <NavLink to='/produtos'>
                                <button className='SalaPesquisadaCategorias'>Sala Pesquisada 1</button>
                            </NavLink>
                    </div>
                    <div>
                        <NavLink to='/criarCategoria'>
                            <button className='criarCategoriaCategorias'>Criar Categoria</button>
                        </NavLink>
                    </div>
                </div>
                <div className='div2'>
                {categorias.map((categoria, index) => (
                        <div key={index}>
                            <button className='buttonProducts' onClick={() => navigateToProducts(categoria)}>
                                {categoria.nome_categoria}
                            </button>
                        </div>
                    ))}
                        

                </div>
            </main>
        </>
    )

}

export default Categorias
