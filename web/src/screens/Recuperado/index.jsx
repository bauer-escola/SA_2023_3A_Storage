


import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.svg'

function Recuperado() {
    return (
        
        <>
        
            <main className='SignIn'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='div2'>
                    <h2>Email Enviado!</h2>
                    <p>Enviamos um Email para s***********@gmail.com para que você redefina a sua senha!</p>
                    <a className="reenviar">Reenviar email</a>
                    <NavLink to='/'>
                      <button>Voltar</button>
                    </NavLink>
                  
                </div>
            </main>
        </>
    )


}

export default Recuperado
