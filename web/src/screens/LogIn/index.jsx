
import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.svg'
import axios from 'axios';
import React, { useState } from 'react';

const logar = async (nomeInput, senhaInput) => {
    try {
      const response = await axios.post('http://localhost:8090/api/login', {
        nome_usuario: nomeInput,
        senha: senhaInput,
      });
      return response.data;
    } catch (error) {
        console.error(error);
    }
  };
  
function LogIn() {

    const [nomeInput, setNomeInput] = useState('');
    const [senhaInput, setSenhaInput] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleLogin = async ( ) => {
        try {
            const response = await logar(nomeInput, senhaInput);
            if (response == true) {
                setIsAuthenticated(true);
                window.location.href="/home"
              } else {
                setIsAuthenticated(false);
                console.log("erro ao logar");
              }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        
        <>
            <main className='SignIn'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='div2'>
                    <input 
                    type="text" 
                    placeholder='Nome de Usuário' 
                    name='nomeInput'
                    value={nomeInput}
                    onChange={(e) => setNomeInput(e.target.value)}
                    />
                    <input 
                    type="password" 
                    placeholder='Senha'
                    name="senhaInput"
                    value={senhaInput}
                    onChange={(e) => setSenhaInput(e.target.value)}
                    />
                      <button
                      type="button" onClick={handleLogin}>
                        Login
                        </button>
                    <NavLink to='/'>
                        <a>Não possui uma conta? Clique aqui</a>
                    </NavLink>
                </div>
            </main>
        </>
    )


}

export default LogIn