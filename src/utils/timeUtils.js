import { mainServices, addOns } from "../services";
import { ethiopianDateNow, addDays, isEqual, toDateString } from "./dateUtils";

const OPENINGHOUR = 2
const CLOTHINGHOUR = 16
const INTERVAL = 15


export async function getAvailableSlots(bookingDetails){
    const response = await fetch(`/api/bookings/${bookingDetails.selectedStylist}/${bookingDetails.selectedDate}`)
    const data = await response.json()

    const bookings = data.bookings
    
    let selectedServiceDuration = mainServices.find(service => service.id === bookingDetails.selectedService).duration
    bookingDetails.addOns.forEach(addon => {
        selectedServiceDuration += addOns.find(element => element.id === addon).duration
    })
    
    let availableslots = []
    for(let j = OPENINGHOUR * 60; j <= CLOTHINGHOUR * 60 - selectedServiceDuration; j += INTERVAL){
        const hr = Math.floor(j / 60) > 12 ? Math.floor(j / 60) - 12 : Math.floor(j / 60)
        const hour = `${hr < 10? '0' + hr : hr}`
        const minute = `${j % 60 < 10? '0' + j % 60 : j % 60}`
        const daylight = `${Math.floor(j / 60) < 12 ? 'ቀን' : 'ማታ'}`
        const timeString = `${hour}:${minute} ${daylight}`
        availableslots.push(timeString)
    }

    bookings.forEach(booking => {
        
        const [time, daylight] = booking.selectedTime.split(" ")
        const [starthr, startmin] = time.split(":").map(Number)
        const startAt = daylight === 'ማታ' && starthr !== 12 ? (starthr + 12 ) * 60 + startmin : starthr * 60 + startmin
        let j = startAt - selectedServiceDuration + INTERVAL > OPENINGHOUR * 60 ? Math.floor((startAt - selectedServiceDuration)/15) * 15 + INTERVAL : OPENINGHOUR * 60
        let serviceDuration = mainServices.find(service => service.id === booking.selectedService).duration
        booking.addOns.forEach(addon => {
            serviceDuration += addOns.find(element => element.id === addon).duration
        })
        for (j; j <= startAt + serviceDuration; j += INTERVAL){
            const hr = Math.floor(j / 60) > 12 ? Math.floor(j / 60) - 12 : Math.floor(j / 60)
            const hour = `${hr < 10? '0' + hr : hr}`
            const minute = `${j % 60 < 10? '0' + j % 60 : j % 60}`
            const daylight = `${Math.floor(j / 60) < 12 ? 'ቀን' : 'ማታ'}`
            const timeString = `${hour}:${minute} ${daylight}`
            availableslots = availableslots.filter(slot => slot !== timeString)
        }
    })



    return availableslots
}