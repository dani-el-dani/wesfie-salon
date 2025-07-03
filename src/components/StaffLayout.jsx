import { Outlet, Link, useLocation, useNavigate } from "react-router";
import logo from '../assets/images/logo.png'
import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";


function StaffLayout(){
    const logout = useAuthStore((state) => state.logout);
    const [showLogout, setShowLogout] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if(location.pathname.includes("/login")){
            setShowLogout(false)
        }
        else{
            setShowLogout(true)
        }
    },[location.pathname])
    return(
        <>
            <nav>
                <div className='nav-container'>
                    <Link to='/'><img id='logo' src={logo} alt="Logo of Wesfie Salon" /></Link>
                    {showLogout && <Link to="/login" onClick={() => {logout(); navigate('/login')}} className='nav-links CTA-btn'>Logout</Link>}
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default StaffLayout