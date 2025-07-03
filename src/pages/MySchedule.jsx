import { useEffect, useState } from "react"
import { addDays, ethiopianDateNow, ethiopianToGregorian,ETMonths, GCMonths, isEqual, toDateString } from "../utils/dateUtils"
import { staffs } from "../staff"
import BookingDetail from "../components/BookingDetail"
import { motion } from "motion/react"
import { redirect } from "react-router"
import useAuthStore from "../store/authStore"

export async function loader(){
    const isLoggedIn = useAuthStore.getState().user?.loggedIn || false
    
    if(!isLoggedIn){
        const response = redirect(`/login/?message=You Must Login First`)
        response.body = true  
        throw response
    }

    return null
}

function MySchedule() {
    const [date, setDate] = useState(ethiopianDateNow())
    const [bookings, setBookings] = useState([])
    const [selectedBooking, setSelectedBooking] = useState(null)
    const [loading, setLoading] = useState(true)
    const user = useAuthStore((state) => state.user)
    const curentGCdate = ethiopianToGregorian(date)

    const OPENINGHOUR = 2
    const CLOTHINGHOUR = 16
    const INTERVAL = 15
    let timeSlots = []
    for(let j = OPENINGHOUR * 60; j <= CLOTHINGHOUR * 60 - 15; j += INTERVAL){
        const hr = Math.floor(j / 60) > 12 ? Math.floor(j / 60) - 12 : Math.floor(j / 60)
        const hour = `${hr < 10? '0' + hr : hr}`
        const minute = `${j % 60 < 10? '0' + j % 60 : j % 60}`
        const daylight = `${Math.floor(j / 60) < 12 ? 'ቀን' : 'ማታ'}`
        const timeString = `${hour}:${minute} ${daylight}`
        timeSlots.push(timeString)
    }


    useEffect(() =>{

        async function getDaySchedule(){
            setLoading(true)
            const res = await fetch(`/api/bookings/${user.user.id}/${toDateString(date)}`)
            const data = await res.json()
            setBookings(data.bookings)
            setLoading(false)            
        }

        getDaySchedule()
    },[date])

    function handlePrevDay(){
        setDate(prevDate => addDays(prevDate , -1))
    }

    function handleNextDay(){
        setDate(prevDate => addDays(prevDate , 1))
    }

    function viewSummary(slot){
        setSelectedBooking(bookings.find(booking => booking.selectedTime === slot))

    }

    if(!user){
        return null
    }


    return(
        <>
        <section className='my-schedule-secton'>
            <div className='section-container'>
                <h2 className='section-title'>{staffs.find(staff => staff.id === user.user.id).name}'s schedule</h2>
                <div className='booking-steps-container'>
                    {!loading ? <>
                        <div className='date-picker-heading'>
                            <button onClick={handlePrevDay} disabled={isEqual(date, ethiopianDateNow())}>&lt;</button>
                            <div>
                                <h2>{`${ETMonths[date.month]} ${date.day} ${date.year}`}</h2>
                                <h3>{`${GCMonths[curentGCdate.getMonth()]} ${curentGCdate.getFullYear()}`}</h3>
                            </div>
                            <button onClick={handleNextDay}>&gt;</button>
                        </div>
                        <div className='time-picker'>       
                            { timeSlots.map( (slot) => {
                                return (                    
                                    <button 
                                        key={toDateString(date) + slot} 
                                        disabled={bookings.find(booking => booking.selectedTime === slot) === undefined}
                                        onClick={() => viewSummary(slot)}
                                    >
                                        <div 
                                            key={slot}
                                            className={`day-container ${bookings.find(booking => booking.selectedTime === slot) !== undefined ? 'booked' : ''}`
                                            }                                     
                                        >
                                            <h3>{slot.split(" ").slice(0,1)}</h3>
                                            <h4>{slot.split(" ").slice(1)}</h4>
                                        </div>
                                    </button>
                                )})}
                            
                        </div>
                    </> : <h1 className='loading'>Loading schedule for the day...</h1>}

                    

                </div>
            </div>
        </section>

        {selectedBooking && <div className='booking-summary-modal'>
            <div className='section-container'>
                
                <motion.div 
                    className='booking-steps-container'
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}

                >
                    <div className="modal-content">
                        <button onClick={() => setSelectedBooking(null)}>
                            <span></span>
                            <span></span>
                        </button>                   
                        <BookingDetail bookingDetail={selectedBooking}/> 
                    </div>
                               
                </motion.div>
            </div>
            
        </div>}

        </>
    )
}


export default MySchedule