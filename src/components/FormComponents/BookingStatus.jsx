import { Link } from 'react-router';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FiFileText } from 'react-icons/fi';


function BookingStatus(){
    return(
        <>
            <div className='booking-status-container'>
                <div className='booking-status-heading'>
                    <AiOutlineCheckCircle className='status-icon'/>
                    <h2>Booking Confirmed!</h2>
                    <p>Your appointment has been successfully booked. Please save your booking reference — you'll need it to check your booking status or to confirm your appointment on the day of your visit.</p>
                </div>
                <div className='booking-status'>
                    <h3>Booking Details</h3>
                    <div className='detail-container'>
                        <FiFileText className='detail-icon'/>
                        <div className='status-detail-info'>
                            <h4>Booking referance</h4>
                            <p>BK123Name</p>
                        </div>                        
                    </div>                    
                </div>
                <div style={{textAlign:"center"}}>
                    <Link className='to-home-btn' to="/">Go to Home</Link>
                </div>
            </div>
        
        </>
    )
}

export default BookingStatus