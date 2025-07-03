import { mainServices, addOns } from "../services"
import { staffs } from "../staff"
import { ETtoString, parseDate } from "../utils/dateUtils"
import { GiComb } from "react-icons/gi"
import { FiPhone, FiUser, FiCalendar, FiClock } from "react-icons/fi";
import { MdAddCircleOutline } from "react-icons/md";
import { FaScissors } from "react-icons/fa6"

function BookingDetail({bookingDetail}){
    let selectedServiceDuration = mainServices.find(service => service.id === bookingDetail.selectedService).duration
        bookingDetail.addOns.forEach(addon => {
            selectedServiceDuration += addOns.find(element => element.id === addon).duration
        })
    
    let selectedServicePrice = mainServices.find(service => service.id === bookingDetail.selectedService).price
    bookingDetail.addOns.forEach(addon => {
        selectedServicePrice += addOns.find(element => element.id === addon).price
    })
    return(
        <>
            <div className='booking-summary'>
                <div className='booking-detail-container'>
                    <h2>Service Detail</h2>
                    <div className='detail-container'>
                        <FaScissors className='detail-icon'/>
                        <div className='detail-info'>
                            <h3>Main Service</h3>
                            <p>{mainServices.find(service => service.id === bookingDetail.selectedService).name}</p>
                        </div>                        
                    </div>
                    
                    
                    {bookingDetail.addOns.length > 0 && (
                        <div className='detail-container'>
                            <MdAddCircleOutline className='detail-icon'/>
                            <div className='detail-info'>
                                <h3>AddOns</h3>
                                <ul>
                                    {bookingDetail.addOns.map(addon => <li key={addon}>{addOns.find(item => item.id === addon).name}</li>)}
                                </ul>
                            </div>
                        </div>
                    )}
                    
                    
                    <div className='detail-container'>
                        <GiComb className='detail-icon'/> 
                        <div className='detail-info'>
                            <h3>Stylist</h3>
                            <p>{staffs.find(service => service.id === bookingDetail.selectedStylist).name}</p>
                        </div>
                    </div>
                </div>

                <div className='booking-detail-container'>
                    <h2>Appointment Detail</h2>
                    <div className='detail-container'>
                        <FiCalendar className='detail-icon'/> 
                        <div className='detail-info'>
                            <h3>Date</h3>
                            <p>{ETtoString(parseDate(bookingDetail.selectedDate))}</p>

                        </div>
                    </div>
                    <div className='detail-container'>
                        <FiClock className='detail-icon'/> 
                        <div className='detail-info'>
                            <h3>Time</h3>
                            <p>{bookingDetail.selectedTime}</p>
                        </div>
                    </div>
                </div>

                <div className='booking-detail-container'>
                    <h2>Personal Information</h2>
                    <div className='detail-container'>
                        <FiUser className='detail-icon'/> 
                        <div className='detail-info'>
                            <h3>Name</h3>
                            <p>{bookingDetail.fullName}</p>
                        </div>
                    </div>
                    <div className='detail-container'>
                        <FiPhone className='detail-icon'/>
                        <div className='detail-info'>
                            <h3>Phone</h3>
                            <p>{bookingDetail.phoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='total-summary'>
                <div>
                    <h3>Total Price</h3>
                    <p>{selectedServicePrice} ETB</p>
                </div>
                <div>
                    <h3>Service Duration</h3>
                    <p>{selectedServiceDuration} Min</p>
                </div>
                    
            </div>
        </>
    )
}

export default BookingDetail