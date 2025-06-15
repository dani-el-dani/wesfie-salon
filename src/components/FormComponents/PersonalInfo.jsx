import StepHeading from "./StepHeading"



function PersonalInfo({bookingDetail, handleChange, error}){
    return(
        <>
            <StepHeading title='Your Information' description='Please provide your contact details'/>
            <div className='personal-info-input-container'>
                <div className='personal-info-input'>
                    <label htmlFor='fullName'><h3>Full Name:</h3></label>
                    <input type="text" id='fullName' name='fullName' value={bookingDetail.fullName} onChange={(e) => handleChange(e)}/>
                    {error?.fullNameError && <h3 className='error-message'>{error.fullNameError}</h3>}
                </div>
                <div className='personal-info-input'>
                    <label htmlFor='phoneNumber'><h3>Phone Number:</h3></label>
                    <input type="tel" id='phoneNumber' name='phoneNumber' value={bookingDetail.phoneNumber} onChange={(e) => handleChange(e)}/>
                    {error?.phoneNumberError && <h3 className='error-message'>{error.phoneNumberError}</h3>}
                </div>
            </div>
            

        </>
    )

}


export default PersonalInfo