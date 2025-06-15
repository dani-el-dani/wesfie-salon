import logo from '../assets/images/logo.png'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router'

function Layout(){

    const [isCTAVisible, setIsCTAVisible] = useState(true)
    const [isMenuOpened, setIsMenuOpened] = useState(false)
    

    return(
        <div className='site-wrapper'>
            <nav>
                <div className='nav-container'>
                    <div onClick={() => setIsMenuOpened(!isMenuOpened)} className={`menu ${!isMenuOpened?'burger-menu-icon':'close-menu-icon'}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <img id='logo' src={logo} alt="Logo of Wesfie Salon" />
                    <ul className='nav-list'>
                        <li className='nav-list-item'>
                            <NavLink 
                                to="" 
                                className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}
                                end>
                                    Home
                            </NavLink>
                        </li>
                        <li className='nav-list-item'>
                            <NavLink 
                                to="services" 
                                className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>
                                    Services
                            </NavLink>
                        </li>
                        <li className='nav-list-item'>
                            <NavLink 
                                to="aboutus" 
                                className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>
                                    About us
                            </NavLink>
                        </li>
                    </ul>
                    {isCTAVisible && <Link to="booking"  className='nav-links CTA-btn'>Book Now</Link>}
                </div>

                <div className={`${isMenuOpened ? 'nav-container-sm-opened' : 'nav-container-sm'}`}>
                    <ul className='nav-list-sm'>
                        <li className='nav-list-item-sm'>
                            <NavLink 
                                to="" 
                                className={({ isActive }) => (isActive ? 'active-nav-link-sm nav-link-sm' : 'nav-link-sm')}
                                end>
                                    Home
                            </NavLink>
                        </li>
                        <li className='nav-list-item-sm'>
                            <NavLink 
                                to="services" 
                                className={({ isActive }) => (isActive ? 'active-nav-link-sm nav-link-sm' : 'nav-link-sm')}>
                                    Services
                            </NavLink>
                        </li>
                        <li className='nav-list-item-sm'>
                            <NavLink 
                                to="aboutus" 
                                className={({ isActive }) => (isActive ? 'active-nav-link-sm nav-link-sm' : 'nav-link-sm')}>
                                    About us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
            </nav>
        
            <Outlet context={{setIsCTAVisible,isMenuOpened}}/>

            <footer className='footer'>

            </footer>
        </div>
        
    )
}

export default Layout