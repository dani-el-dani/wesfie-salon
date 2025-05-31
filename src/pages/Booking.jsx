import { useState } from "react"

function Booking(){

    const steps = ["Select service", "Select stylist", "Book date and time", "Fill you information", "Confirm"]
    const [currentStep, setCurrentStep] = useState(0);

    function handleFormSubmition(){
        if(currentStep < 4){
            setCurrentStep(prevCurrentStep => prevCurrentStep + 1)
        }
    }

    function handleBackButton(){
        setCurrentStep(prevCurrentStep => prevCurrentStep - 1)
    }

    
    return(
        <>
            <header>
                <section className='booking-header-section'>
                    <div className='section-container'>
                        <h2 className='section-title'>Book Your Apointment</h2>
                        <div className='steps-container'>
                            {steps.map((step, index) => (
                                <div 
                                    key={index} 
                                    className={`step ' + ${index <= currentStep
                                        ?'finished-step'
                                        :undefined} 
                                        ${index === currentStep
                                        ?'current-step'
                                        :undefined
                                    }`}
                                >
                                    <span className='step-number'>{index + 1}</span>
                                    <p className='step-description'>{step}</p>
                                </div>  
                            ))}
                        </div>
                    </div>
                </section>
                <section className='booking-form-secton'>
                    <div className='section-container'>
                        <form action={handleFormSubmition}>
                            <div className='form-nav-btns'>
                                {currentStep > 0 && <button onClick={handleBackButton} type='button'>Back</button>}
                                <button type='submit' className='next-btn'>Next</button>
                            </div>
                            
                        </form>

                    </div>
                    

                </section>
            </header>
        </>
    )
}

export default Booking