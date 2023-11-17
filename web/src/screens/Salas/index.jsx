import './Salas.css'
import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.svg'
import Header from '../../components/Header';
import LetraSala from '../../components/Salas/LetraSalas'; 

function Salas() {

    const letrasSalas = LetraSala();

    return (
        
        <>
        <Header/>
            <main className='Salas'>
                <div>
                    <h1>Salas</h1>
                    <input type="search" name="searchSalas" id="searchSalas" placeholder='Pesquisar' />
                    <div>
                    <NavLink to='/SalasEspecificas'>
                                <button>Sala Pesquisada 1</button>
                            </NavLink>
                    </div>
                </div>
                <div className='div2'>
                {letrasSalas.map((letra) => (
              <NavLink key={letra.id_letrasalas} to={`/SalasEspecificas/${letra.nome_letrasalas}`}>
                <button>{`Salas ${letra.nome_letrasalas}`}</button>
              </NavLink>
            ))}
                </div>
            </main>
        </>
    )

}

export default Salas
