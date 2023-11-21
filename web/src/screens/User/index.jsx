import './User.css'
import { NavLink } from "react-router-dom";
import Header from '../../components/Header'
import user from '../../assets/UserProfile.svg'



function Home() {
    return (
        <>
            <Header/>
            <main className='user'>
                <img src={user} alt="" />
                <h4>Nome do Usuário</h4>
                <input type="text" placeholder='Email'/>
                <NavLink to='/'>
                    <button>Sair</button>
                </NavLink>
            </main>
        </>
    )

}

export default Home
