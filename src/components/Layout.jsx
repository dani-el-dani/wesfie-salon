import logo from '../assets/images/logo.png'
import { NavLink, Outlet } from 'react-router'

function Layout(){
    return(
        <div className='site-wrapper'>
            <nav>
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
                <a className='nav-links CTA-btn' href="">Book Now</a>
            </nav>
        
            <Outlet/>

            <footer className='footer'>

            </footer>
        </div>
        
    )
}

export default Layout