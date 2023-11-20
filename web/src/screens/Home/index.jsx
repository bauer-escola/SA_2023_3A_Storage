import './Home.css'
import { NavLink } from "react-router-dom";
import Header from '../../components/Header'
import img1 from '../../assets/SalasDeAula.png'
import img2 from '../../assets/Categorias.png'
import img3 from '../../assets/ItemsEmFalta.png'
import mais from '../../assets/Mais.svg'


function Home() {
    return (
        <>
            <Header/>
            <main className='home'>
                <NavLink to='/Salas'>
                    <article>
                        <img src={img1} alt="" />
                        <div>
                            <h3>
                                Sala de aula</h3>
                        </div>
                    </article>

                </NavLink>
                <NavLink to='/Categorias'>
                    <article>
                        <img src={img2} alt="" />
                        <div>
                            <h3>Categorias</h3>
                        </div>
                    </article>

                </NavLink>
                <NavLink to='/EmFalta'>
                    <article>
                        <img src={img3} alt="" />
                        <div>
                            <h3>Em Falta</h3>
                        </div>
                    </article>

                </NavLink>
                <NavLink to='/Requisitar'>
                    <article>
                        <img className='mais' src={mais} alt="" />
                    </article>

                </NavLink>
            </main>
        </>
    )

}

export default Home
