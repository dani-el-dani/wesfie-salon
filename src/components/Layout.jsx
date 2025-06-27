import logo from '../assets/images/logo.png'
import logoFooter from '../assets/images/logo_primary_color.png'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaTelegram, FaTiktok, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { motion } from 'motion/react'

function Layout(){

    const [isCTAVisible, setIsCTAVisible] = useState(true)
    const [isMenuOpened, setIsMenuOpened] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setIsMenuOpened(false)
        if(location.pathname.includes('booking')){
            setIsCTAVisible(false)
        }
        else{
            setIsCTAVisible(true)
        }
    },[location.pathname])
    

    return(
        <div className='site-wrapper'>
            <nav className={`${isMenuOpened ? 'nav-menu-opened': undefined}`}>
                <div className='nav-container'>
                    <div onClick={() => setIsMenuOpened(!isMenuOpened)} className={`menu ${!isMenuOpened?'burger-menu-icon':'close-menu-icon'}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Link to='/'><img id='logo' src={logo} alt="Logo of Wesfie Salon" /></Link>
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
                    {isCTAVisible && <Link to="booking" className='nav-links CTA-btn'>Book Now</Link>}
                </div>

                <motion.div layout className={`${isMenuOpened ? 'nav-container-sm-opened' : 'nav-container-sm'}`}>
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
                </motion.div>                
            </nav>
        
            <Outlet/>

            <footer >
                <div className='footer'>
                    <div className='footer-container'>
                        <Link to='/'><img id='logo' src={logoFooter} alt="Logo of Wesfie Salon" /></Link>
                        <div className='footer-nav-container'>
                            <h3>Go to</h3>
                            <ul>
                                <li><Link to=''>Home</Link></li>
                                <li><Link to='services'>Services</Link></li>
                                <li><Link to='aboutus'>About us</Link></li>
                            </ul>
                        </div>
                        <div className='contact'>
                            <h3>Contact</h3>
                            <div className='contact-container'>
                                <FiMail className='contact-icon'/>
                                <div className='contact-info'>
                                    <h4>Email</h4>
                                    <p>info@wesfiesalon.com</p>
                                </div>
                            </div>

                            <div className='contact-container'>
                                <FiPhone className='contact-icon' />
                                <div className='contact-info'>
                                    <h4>Phone</h4>
                                    <p>+251912345678</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='socials-container'>
                        <a href="#"><FaFacebook/></a>
                        <a href="#"><FaInstagram/></a>
                        <a href="#"><FaTwitter/></a>
                        <a href="#"><FaTiktok/></a>
                        <a href="#"><FaTelegram/></a>
                    </div>
                    <p>Wesfie Salon &copy; 2025 All rigths reserved</p>
                </div>
                
            </footer>
        </div>
        
    )
}

export default Layout