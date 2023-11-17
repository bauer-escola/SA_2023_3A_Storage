
import './SignIn.css'
import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.svg'
import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {
    const [nomeInput, setNomeInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [senhaInput, setSenhaInput] = useState('');

    const handleSubmit = async () => {
        try {
            let novoUsuario = {
                nome_usuario: nomeInput,
                email: emailInput,
                senha: senhaInput,
            };
            if
                (nomeInput != null
                && emailInput != null
                && senhaInput != null
                && senhaInput.length > 0) {
                    alert(`Usuário ${nomeInput} cadastrado com sucesso!`);
                await axios.post('http://localhost:8090/usuarios', novoUsuario);
                console.log('Cadastro realizado com sucesso!');
            
                setNomeInput('');
                setEmailInput('');
                setSenhaInput('');
            } 
        } catch (error) {
            console.error('Erro ao criar o cadastro:', error);
        };
    };

    return (

        <>
            <main className='SignIn'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <form className='div2'>
                    <input
                        type="text"
                        placeholder='Nome de Usuário'
                        value={nomeInput}
                        onChange={(e) => setNomeInput(e.target.value)}
                        required
                    />
                    <input
                        type="mail"
                        placeholder='Email'
                        name='emai'
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder='Senha'
                        value={senhaInput}
                        onChange={(e) => setSenhaInput(e.target.value)}
                        required
                    />
                    <button
                        onClick={handleSubmit}
                        type='submit'>
                        Cadastrar
                    </button>
                    <NavLink to='/LogIn'>
                        <a>Já possui uma conta? Clique aqui</a>
                    </NavLink>
                    <NavLink to='/Recuperar'>
                        <a>Esqueceu a senha? Clique aqui</a>
                    </NavLink>
                </form>
            </main>
        </>
    )

}

export default SignIn