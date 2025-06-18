import { useEffect, useState } from "react"
import ServiceSelection from "../components/FormComponents/ServiceSelection";
import { mainServices, addOns } from "../services";
import AddOnsSelection from "../components/FormComponents/AddOnsSelection";
import StylistSelection from "../components/FormComponents/StylistSelection";
import ConfirmBooking from "../components/FormComponents/ConfirmBooking";
import { ethiopianDateNow, getNextDay, toDateString, parseDate } from "../utils/dateUtils";
import DateSelection from "../components/FormComponents/DateSelaction";
import { useOutletContext, useLocation } from "react-router";
import PersonalInfo from "../components/FormComponents/PersonalInfo";
import BookingStatus from "../components/FormComponents/BookingStatus";


const simulateServerRequest = (delay, data, shouldSucceed = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({ data: data, status: 200 });
      } else {
        reject({ message: 'Request timed out', status: 408 });
      }
    }, delay);
  });
};

function Booking(){

    const location = useLocation()

    const setIsCTAVisible = useOutletContext()
    const steps = ["Select service", "Select AddOns","Select stylist", "Book date and time", "Fill you information", "Confirm"]
    const [currentStep, setCurrentStep] = useState(location.state?.service ? 1 : 0)
    const [loading, setLoading] = useState(false)
    const [bookingDetail, setBookingDetail] = useState({
        selectedService : location.state?.service || null,
        addOns:[],
        selectedStylist:null,
        selectedDate:getNextDay(ethiopianDateNow()),
        selectedTime:null,
        fullName:'fake name',
        phoneNumber:'1234567890'

    })


    useEffect(() =>{
        setIsCTAVisible(false)
        return () => setIsCTAVisible(true)
    },[])

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
            if(bookingDetail.fullName.length === 0){
                setError(prevError => ({...prevError, fullNameError:'Please fill this field name is required'}))
                isValid = false
            }
            if(bookingDetail.phoneNumber.length === 0){
                setError(prevError => ({...prevError, phoneNumberError:'Please fill this field phone number is required'}))
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
            [name] : name === 'selectedDate'? parseDate(value) : value
        }))

        if(name === 'selectedDate'){
            setBookingDetail(prevBookingDetail => ({
                ...prevBookingDetail,
                selectedTime : null
            }))
        }

        if(name === 'selectedService'){
            setBookingDetail(prevBookingDetail => ({
                ...prevBookingDetail,
                addOns : []
            }))
        }

    }

    async function handleFormSubmition(e){
        e.preventDefault()
        if(validateForm()){
            if(currentStep < steps.length-1){
                setCurrentStep(prevCurrentStep => prevCurrentStep + 1)
            }

            else{
                setLoading(true)
                try{
                    const response = await simulateServerRequest(3000, { message: 'Data from server' }, true);
                }catch(err){

                }finally{
                    setLoading(false)
                }
                setCurrentStep(prev => prev + 1)
                
            }

            window.scrollTo(0, 0);
        }
        
    }

    function handleBackButton(){
        setCurrentStep(prevCurrentStep => prevCurrentStep - 1)
        window.scrollTo(0, 0);
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
                                className={`step ${index <= currentStep ?'finished-step' :''} ${index === currentStep ? 'current-step' : ''}`}
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

                    <div className='booking-steps-container'>
                        {currentStep < 6 
                            ? <form onSubmit={(e) => handleFormSubmition(e)}>
                                {currentStep === 0 && <ServiceSelection bookingDetail={bookingDetail} handleChange={handleChange} error={error}/>}
                                {currentStep === 1 && <AddOnsSelection bookingDetail={bookingDetail} handleChange={handleAddOnsSelection} error={error}/>}
                                {currentStep === 2 && <StylistSelection bookingDetail={bookingDetail} handleChange={handleChange} error={error}/>}
                                {currentStep === 3 && <DateSelection bookingDetail={bookingDetail} handleChange={handleChange} error={error}/>}
                                {currentStep === 4 && <PersonalInfo bookingDetail={bookingDetail} handleChange={handleChange} error={error}/>}
                                {currentStep === 5 && <ConfirmBooking bookingDetail={bookingDetail}/>}
                                <div className={`form-nav-btns ${currentStep === 0 ? 'first-step' : ''}`}>
                                    {currentStep > 0 && <button className={`${!loading ? 'form-btn': ''}`} disabled={loading} onClick={handleBackButton} type='button'>Back</button>}
                                    <button className={`${!loading ? 'form-btn': ''}`} disabled={loading} type='submit'>{currentStep === steps.length-1 ? 'Book' : 'Next'}</button>
                                </div>
                                
                            </form>
                            
                            : <BookingStatus />
                        
                        }

                            
                    </div>
                    

                </div>
                

            </section>
        </>
    )
}

export default Booking