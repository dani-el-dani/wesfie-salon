import StepHeading from "./StepHeading"
import useSalonDataStore from "../../store/salonDataStore"

function StylistSelection({bookingDetail, handleChange, error}){
    const staffs = useSalonDataStore((state) => state.staffs)
    const mainServices = useSalonDataStore((state) => state.mainServices)

    if(staffs.length === 0 || mainServices.length === 0){
        return null
    }
    const stylists = staffs.filter(staff => staff.spaciality === mainServices.find(service => service.id === bookingDetail.selectedService).category)
    return(

        <>
            <StepHeading title='Select A Stylist' description='Please select your favourite stylist'/>
            <div className='service-selection-container'>
                {stylists.map(stylist => (
                    <div key={stylist.id} className='service-radio-btn-container'>
                        <input 
                            type='radio' 
                            name='selectedStylist'
                            value={stylist.id} 
                            id={stylist.id} 
                            className='services-radio-btn' 
                            checked={bookingDetail.selectedStylist === stylist.id}
                            onChange={(e) => handleChange(e)}
                        />
                        <label htmlFor={stylist.id} className='serservice-radio-btn-label'>
                            <div className='service-container stylist-container'>
                                <img src={stylist.imageUrl} alt="" />
                                <div className='stylist-info'>
                                    <h3>{stylist.name}</h3>
                                    <p>{stylist.info}</p>   
                                </div>
                            </div>
                        </label>
                    </div>
                
                ))}
            </div>

            {error?.selectedStylistError && <h3 className='error-message'>{error.selectedStylistError}</h3>}
        </>
    )

}

export default StylistSelection