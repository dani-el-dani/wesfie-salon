import StepHeading from "./StepHeading"
import BookingDetail from "../BookingDetail"

function ConfirmBooking({bookingDetail}){

    return (
        <>

            <StepHeading title="Review & Confirm" description="Please review your booking details before confirming"/>
            <BookingDetail bookingDetail={bookingDetail}/>
        </>
    )
}
export default ConfirmBooking