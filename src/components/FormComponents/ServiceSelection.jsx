
import { mainServices, addOns } from "../../services"
import StepHeading from "./StepHeading"

function ServiceSelection({bookingDetail, handleChange, error}){
    const services = mainServices
    return(
        <>
            <StepHeading title='Select a Service' description="Choose the service you'd like to book"/>
            <div className='service-selection-container'>
                {services.map(service => (
                    <div key={service.id} className='service-radio-btn-container'>
                        <input 
                            type='radio' 
                            name='selectedService'
                            value={service.id} 
                            id={service.id} 
                            className='services-radio-btn' 
                            checked={bookingDetail.selectedService === service.id}
                            onChange={(e) => handleChange(e)}
                        />
                        <label htmlFor={service.id} className='serservice-radio-btn-label'>
                            <div className='service-container'>
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                                <div className='service-detail'>
                                    <p>{service.price} ETB</p>
                                    <p>{service.duration} min</p>
                                </div>
                            </div>
                        </label>
                    </div>
                
                ))}
            </div>

            {error?.selectedServiceError && <h3 className='error-message'>{error.selectedServiceError}</h3>}
            
        </>

    )
}

export default ServiceSelection