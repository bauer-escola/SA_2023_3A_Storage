
import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.svg'

function Recuperar() {
    return (
        
        <>
        
            <main className='SignIn'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='div2'>
                    <h2>Esqueçeu a senha?</h2>
                    <p>informe seu e-mail cadastrada no Stock para enviarmos as instruções de redefinição de senha</p>
                    <input type="text" placeholder='Email'/>
                    <NavLink to='/Recuperado'>
                      <button>Continuar</button>
                    </NavLink>
                  
                </div>
            </main>
        </>
    )


}

export default Recuperar