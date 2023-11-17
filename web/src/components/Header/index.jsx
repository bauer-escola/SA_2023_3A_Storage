import './Header.css'
import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.svg'
import userProfile from '../../assets/UserProfile.svg'

function Header() {
    return (
        <>
            <header className='header'>
                <NavLink to='/home'>
                    <img src={logo} alt="" />
                </NavLink>

                <NavLink to='/user'>
                    <img src={userProfile} alt="" />
                </NavLink>
            </header>
        </>
    )

}

export default Header
