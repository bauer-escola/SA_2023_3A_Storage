import './EmFalta.css'
import { NavLink } from "react-router-dom";
import Editar from '../../assets/Editar.svg'
import Lixeira from '../../assets/Lixeira.svg'
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import React, { useState, useEffect } from 'react';


function EmFalta() {
    const [requisicao, setRequisicao] = useState([]);
    const navigateTo = useNavigate(); // useNavigate hook

    useEffect(() => {
        fetch('http://localhost:8090/requisitar')
            .then((response) => response.json())
            .then((data) => {
                setRequisicao(data);
            })
            .catch((error) => {
                console.error('Erro ao buscar as requisicao:', error);
            });
    }, []);

    const navigateToRequisicao = (requisitar) => {
        navigateTo(`/Requisicao/${requisitar.id}`);
    };

    const deleteRequisicao = (requisitarId) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`http://localhost:8090/requisitar/${requisitarId}`, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro ao excluir a requisição: ${response.status}`);
                }
                // Remover a requisição da lista após a exclusão bem-sucedida
                const updatedRequisicao = requisicao.filter(item => item.id !== requisitarId);
                setRequisicao(updatedRequisicao);
            })
            .catch((error) => {
                console.error('Erro ao excluir a requisição:', error);
            });
    };
    
    return (
        
        <>
        <Header/>
            <main className='EmFalta'>
                <div>
                    <h1>EmFalta</h1>
                    <input type="search" name="searchEmFalta" id="searchEmFalta" placeholder='Pesquisar' />
                    <div>
                            <NavLink to='/Requisitar'>
                                <button className='requisitoButtonEmFalta'>Pedido de requisito</button>
                            </NavLink>
                    </div>
                </div>
                <div className='div2'>
                    {requisicao.map((requisitar, index) => (
                        <div key={index}>
                            <button onClick={() => navigateToRequisicao(requisitar)}>
                                {"Requisicao de: " + " " + requisitar.categoria}
                                 <img
                                className="emFaltaLixo"
                                src={Lixeira}
                                alt=""
                                onClick={() => deleteRequisicao(requisitar.id)}
                            />
                            </button>
                           
                        </div>
                    ))}
                </div>
            </main>
        </>
    )

}

export default EmFalta
