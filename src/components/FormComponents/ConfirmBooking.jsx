import { mainServices, addOns } from "../../services"
import { staffs } from "../../staff"
import { ETtoString, parseDate } from "../../utils/dateUtils"
import StepHeading from "./StepHeading"
import { GiComb } from "react-icons/gi"
import { FiPhone, FiUser, FiCalendar, FiClock } from "react-icons/fi";
import { MdAddCircleOutline } from "react-icons/md";
import { FaScissors } from "react-icons/fa6"
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