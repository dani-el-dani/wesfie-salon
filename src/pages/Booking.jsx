import { useState, Suspense } from "react"
import { Link } from "react-router";
import ServiceSelection from "../components/FormComponents/ServiceSelection";
import AddOnsSelection from "../components/FormComponents/AddOnsSelection";
import StylistSelection from "../components/FormComponents/StylistSelection";
import ConfirmBooking from "../components/FormComponents/ConfirmBooking";
import { ethiopianDateNow, getNextDay, toDateString, parseDate } from "../utils/dateUtils";
import DateSelection from "../components/FormComponents/DateSelaction";
import { useLocation, Await, useLoaderData } from "react-router";
import PersonalInfo from "../components/FormComponents/PersonalInfo";
import BookingStatus from "../components/FormComponents/BookingStatus";
import { motion, AnimatePresence } from "motion/react";
import useSalonDataStore from "../store/salonDataStore";
import Error from "./Error";

export async function loader(){

    if(useSalonDataStore.getState().mainServices.length === 0 || useSalonDataStore.getState().addOns.length === 0){
        const promise = fetch('/api/salondata')
            .then(res => {
                if (!res.ok) throw {
                    message: 'Error Fetching salon data',
                    statusText: res.statusText,
                    status: res.status
                }
                return res.json()
            })
            .then(data => {
                useSalonDataStore.getState().loadSalonData(data) 
                return data
            })

        return ({ salonDatastore: promise })
    }

    else{
        return ({salonDatastore: 'data'})
    }
}

const variants = {
  initial: direction => {
    return {
      x: direction === 'next' ? 200 : -200,
      opacity: 0,      
    }
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      x: direction === 'next' ? -200 : 200,
      opacity: 0,
    }
  },
}

const resetBookingDetail = {
    selectedService : null,
    addOns:[],
    selectedStylist:null,
    selectedDate:toDateString(getNextDay(ethiopianDateNow())),
    selectedTime:null,
    fullName:'',
    phoneNumber:''

}

function Booking(){

    const location = useLocation()
    const salonData = useLoaderData()
    const steps = ["Select service", "Select AddOns","Select stylist", "Book date and time", "Fill you information", "Confirm"]
    const [currentStep, setCurrentStep] = useState(location.state?.service ? 1 : 0)
    const [moveDir, setMoveDir] = useState('next')
    const [loading, setLoading] = useState(false)
    const [bookingResponse, setBookingResponse] = useState(null)
    const [bookingDetail, setBookingDetail] = useState({
        selectedService : location.state?.service || null,
        addOns:[],
        selectedStylist:null,
        selectedDate:toDateString(getNextDay(ethiopianDateNow())),
        selectedTime:null,
        fullName:'',
        phoneNumber:''

    })

    const [error,setError] = useState(null)

    function validateForm(){
        setError(null)
        let isValid = true
        if(currentStep === 0 && !bookingDetail.selectedService){
            setError(prevError => ({...prevError, selectedServiceError:'You must choose a service!!'}))
            isValid = false
        }
        if(currentStep === 2 && !bookingDetail.selectedStylist){
            setError(prevError => ({...prevError, selectedStylistError:'You must choose a stylist!!'}))
            isValid = false
        }
        if(currentStep === 3 && !bookingDetail.selectedTime){
            setError(prevError => ({...prevError, selectedTimeError:'You must choose a time!!'}))
            isValid = false
        }

        if(currentStep === 4){
            const phoneregex = /^(09|07)\d{8}$/
            if(bookingDetail.fullName.length === 0){
                setError(prevError => ({...prevError, fullNameError:'Please fill this field name is required'}))
                isValid = false
            }

            if(bookingDetail.phoneNumber.length === 0){
                setError(prevError => ({...prevError, phoneNumberError:'Please fill this field phone number is required'}))
                isValid = false
            }

            else if(!phoneregex.test(bookingDetail.phoneNumber)){
                setError(prevError => ({...prevError, phoneNumberError:'Invalid phone number Please fill a valid phone number'}))
                isValid = false
            }

        }
        
        return isValid
    }

    function handleAddOnsSelection(e){
        const{name,checked} = e.target

        if(checked){
            setBookingDetail(prevBookingDetail => (
                {
                    ...prevBookingDetail,
                    addOns: [...prevBookingDetail.addOns, name]
                }
            ))
        }

        else{
            setBookingDetail(prevBookingDetail => (
                {
                    ...prevBookingDetail,
                    addOns: prevBookingDetail.addOns.filter(addon => addon !== name)
                }
            ))

        }
    }

    function handleChange(e){
        const {name, value} = e.target

        setBookingDetail(prevBookingDetail => ({
            ...prevBookingDetail,
            [name] : value
        }))

        if(name === 'selectedDate' || name === 'selectedStylist'){
            setBookingDetail(prevBookingDetail => ({
                ...prevBookingDetail,
                selectedTime : null
            }))
        }

        if(name === 'selectedService'){
            setBookingDetail(prevBookingDetail => ({
                ...prevBookingDetail,
                addOns : [],
                selectedStylist: null,
                selectedTime: null
                
            }))
        }

    }

    function reload(){
        setBookingDetail(resetBookingDetail)
        setCurrentStep(0)
    }

    async function handelbooking(){
        setLoading(true)
        setError(null)
        try{
            const response = await fetch("/api/book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingDetail),
            })

            if(!response.ok){
                throw { message: 'Request timed out', status: 408 }
            }

            const data = await response.json()
            setBookingResponse(data.bookings)
        }catch(err){
            setError(err)

        }finally{
            setLoading(false)
            if( currentStep < steps.length){
                setCurrentStep(prev => prev + 1)
            }
            
        }
        window.scrollTo(0, 0); 
    }

    async function handleFormSubmition(e){
        e.preventDefault()
        await handelbooking()   
    }

    function handleBackButton(){
        setMoveDir('back')
        setCurrentStep(prevCurrentStep => prevCurrentStep - 1)
        window.scrollTo(0, 0);
    }

    function handleNextButton(){
        if(validateForm()){
            setMoveDir('next')
            setCurrentStep(prevCurrentStep => prevCurrentStep + 1)
            window.scrollTo(0, 0);
        }
    }

    
    return(
        <>
            <section className='booking-form-secton'>
                <div className='section-container'>
                    <h2 className='section-title'>Book Your Apointment</h2>
                    <div className='steps-container'>
                        {steps.map((step, index) => (
                            <div 
                                key={index} 
                                className={`step ${index <= currentStep ? 'finished-step' : ''} ${index === currentStep ? 'current-step' : ''}`}
                            >
                                <span className='step-number'>{index + 1}</span>
                                <p className='step-description'>{step}</p>
                            </div>  
                        ))}
                    </div>
                    <div className='steps-container-sm'>
                        <span className='step-number'>{Math.min(currentStep + 1, steps.length)}</span>
                        <p className='step-description'>{steps[Math.min(currentStep, steps.length - 1)]}</p>
                        <div className='step-box-container'>
                            {steps.map((step, index) => (    
                                <div 
                                    key={index} 
                                    className={`step-sm ${index < currentStep ? 'finished-step-sm' : ''} ${index === currentStep ? 'current-step-sm' : ''}`}
                                >
                                </div>    
                            ))}
                        </div>
                    </div>
                    <AnimatePresence mode='popLayout' initial={false} custom={moveDir}>
                        <motion.div key={steps[currentStep]} variants={variants} initial='initial' animate='animate' exit='exit' transition={{duration: 0.3}} custom={moveDir} className='booking-steps-container'>
                            {currentStep < steps.length 
                                ? <Suspense fallback={<h1 className='loading'>Loading...</h1>}>
                                    <Await resolve={salonData.salonDatastore} errorElement={<Error/>}>
                                        {
                                            () => {

                                                return (<form onSubmit={(e) => handleFormSubmition(e)}>
                                                
                                                    {currentStep === 0 ? <ServiceSelection bookingDetail={bookingDetail} handleChange={handleChange} error={error}/>
                                                    :currentStep === 1 ? <AddOnsSelection bookingDetail={bookingDetail} handleChange={handleAddOnsSelection} error={error}/>
                                                    :currentStep === 2 ? <StylistSelection bookingDetail={bookingDetail} handleChange={handleChange} error={error}/>
                                                    :currentStep === 3 ? <DateSelection bookingDetail={bookingDetail} handleChange={handleChange} error={error}/>
                                                    :currentStep === 4 ? <PersonalInfo bookingDetail={bookingDetail} handleChange={handleChange} error={error}/>
                                                    :<ConfirmBooking bookingDetail={bookingDetail}/>}
                                                
                                                    <div className={`form-nav-btns ${currentStep === 0 ? 'first-step' : ''}`}>
                                                        {currentStep > 0 && <button className={`form-btn ${!loading ? 'form-btn-enabled' : 'form-btn-disabled' }`} disabled={loading} onClick={handleBackButton} type='button'>Back</button>}
                                                        {currentStep === steps.length-1
                                                            ?<button className={`form-btn ${!loading ? 'form-btn-enabled' : 'form-btn-disabled' }`} disabled={loading} key={'book'} type='submit'>Book</button>
                                                            :<button className={`form-btn ${!loading ? 'form-btn-enabled' : 'form-btn-disabled'}`} disabled={loading} key={'next'} onClick={handleNextButton} type='button'>Next</button>
                                                        }
                                                    </div>
                                                
                                                </form>)
                                            }
                                        }
                                    </Await>
                                </Suspense>
                                
                                : (<>
                                    {!loading 
                                        ? <>
                                            <BookingStatus error={error} bookingResponce={bookingResponse}/>
                                            {!error && <div style={{textAlign:"center"}}>
                                                <Link className='to-home-btn' to="/">Go to Home</Link>
                                            </div>
                                            }
                                            {error && <div style={{textAlign:"center"}}>
                                                <div className={`form-nav-btns`}>
                                                    <button className={`form-btn ${!loading ? 'form-btn-enabled' : 'form-btn-disabled' }`} onClick={handelbooking}>Try Again</button>
                                                    <button className={`form-btn ${!loading ? 'form-btn-enabled' : 'form-btn-disabled' }`} onClick={reload}>Reset</button>
                                                </div>
                                            </div>}
                                        </>
                                        : <h1 className='loading'>Loading...</h1>
                                    }
                                </>
                                )
                            
                            }
                                
                        </motion.div>
                    </AnimatePresence>

                </div>
                

            </section>
        </>
    )
}

export default Booking