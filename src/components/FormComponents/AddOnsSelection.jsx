import { addOns } from "../../services"
import { mainServices } from "../../services"
import StepHeading from "./StepHeading"

function AddOnsSelection({bookingDetail, handleChange}){
    
    const avilableAddOns = addOns.filter(addOn => addOn.category === mainServices.find(service => service.id === bookingDetail.selectedService).category)
    
    
    return(
        <>
            <StepHeading title='Select AddOns' description='Please choose as many extra services as you want'/>
            <div className='addons-container'>
                <div className='service-selection-container'>
                    {avilableAddOns.map(addon => 
                        {
                            return(
                            <div key={addon.id} className='service-radio-btn-container'>
                                <input 
                                    type='checkbox' 
                                    name={addon.id}
                                    id={addon.id} 
                                    className='addon-checkbox-btn' 
                                    checked={bookingDetail.addOns.includes(addon.id)}
                                    onChange={(e) => handleChange(e)}
                                />
                                <label htmlFor={addon.id} className='addon-checkbox-btn-label'>
                                    <div className='addon-container service-container'>
                                        <h3>{addon.name}</h3>
                                        {/* <p>{addonDetail.description}</p> */}
                                        <div className='service-detail'>
                                            <p>{addon.price} ETB</p>
                                            <p>{addon.duration} min</p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                    
                    )})}
                </div>
            </div>
        </>
    )
}

export default AddOnsSelection