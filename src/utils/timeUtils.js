import { mainServices, addOns } from "../services";
import { ethiopianDateNow, addDays, isEqual } from "./dateUtils";

const OPENINGHOUR = 2
const CLOTHINGHOUR = 16
const INTERVAL = 15


const mockBookings = [
  {
    bookingId: "BK001",
    selectedService: "hair-coloring",
    addOns: ["deep-conditioning", "steam-therapy"],
    selectedStylist: "1",
    selectedDate: addDays(ethiopianDateNow(),1),
    selectedTime: "12:00 ማታ",
    fullName: "Liya Abebe",
    phoneNumber: "0911123456"
  },
  {
    bookingId: "BK002",
    selectedService: "traditional-braiding",
    addOns: ["hot-oil-treatment"],
    selectedStylist: "0",
    selectedDate: addDays(ethiopianDateNow(),1),
    selectedTime: "11:00 ቀን",
    fullName: "Sara Tadesse",
    phoneNumber: "0911987654"
  },
  {
    bookingId: "BK003",
    selectedService: "editorial-makeup",
    addOns: ["skin-prep", "eyebrow-tinting"],
    selectedStylist: "3",
    selectedDate: addDays(ethiopianDateNow(),1),
    selectedTime: "12:30 ማታ",
    fullName: "Ruth Mamo",
    phoneNumber: "0922345678"
  },
  {
    bookingId: "BK004",
    selectedService: "bridal-makeup",
    addOns: ["false-lashes", "touchup-kit"],
    selectedStylist: "5",
    selectedDate: addDays(ethiopianDateNow(),1),
    selectedTime: "12:30 ማታ",
    fullName: "Sara Tadesse",
    phoneNumber: "0911987654"
  },
  {
    bookingId: "BK005",
    selectedService: "editorial-makeup",
    addOns: ["skin-prep"],
    selectedStylist: "4",
    selectedDate: addDays(ethiopianDateNow(),1),
    selectedTime: "12:30 ማታ",
    fullName: "Yodit Desta",
    phoneNumber: "0933123456"
  },
  {
    bookingId: "BK006",
    selectedService: "natural-makeup",
    addOns: ["eyebrow-shaping"],
    selectedStylist: "4",
    selectedDate: addDays(ethiopianDateNow(),2),
    selectedTime: "08:00 ቀን",
    fullName: "Hanna Tesfaye",
    phoneNumber: "0911456789"
  },
  {
    bookingId: "BK007",
    selectedService: "hair-coloring",
    addOns: ["scalp-massage", "edge-styling"],
    selectedStylist: "2",
    selectedDate: addDays(ethiopianDateNow(),2),
    selectedTime: "10:00 ቀን",
    fullName: "Mekdes Mulu",
    phoneNumber: "0911765432"
  },
  {
    bookingId: "BK008",
    selectedService: "silk-press",
    addOns: ["deep-conditioning"],
    selectedStylist: "1",
    selectedDate: addDays(ethiopianDateNow(),2),
    selectedTime: "05:30 ቀን",
    fullName: "Mahi Belachew",
    phoneNumber: "0944345678"
  },
  {
    bookingId: "BK009",
    selectedService: "eyelash-extensions",
    addOns: ["skin-prep"],
    selectedStylist: "3",
    selectedDate: addDays(ethiopianDateNow(),2),
    selectedTime: "06:30 ቀን",
    fullName: "Saron Tsegaye",
    phoneNumber: "0912233445"
  },
  {
    bookingId: "BK010",
    selectedService: "traditional-braiding",
    addOns: ["steam-therapy"],
    selectedStylist: "0",
    selectedDate: addDays(ethiopianDateNow(),2),
    selectedTime: "10:00 ቀን",
    fullName: "Samrawit Degu",
    phoneNumber: "0911654321"
  },
  {
    bookingId: "BK011",
    selectedService: "haircut-styling",
    addOns: [],
    selectedStylist: "1",
    selectedDate: addDays(ethiopianDateNow(),3),
    selectedTime: "12:30 ማታ",
    fullName: "Rahel Kassahun",
    phoneNumber: "0911433221"
  },
  {
    bookingId: "BK012",
    selectedService: "cornrows-feedins",
    addOns: ["hot-oil-treatment"],
    selectedStylist: "0",
    selectedDate: addDays(ethiopianDateNow(),3),
    selectedTime: "11:00 ቀን",
    fullName: "Netsanet Belay",
    phoneNumber: "0912121212"
  },
  {
    bookingId: "BK013",
    selectedService: "foot-care",
    addOns: ["hand-foot-massage"],
    selectedStylist: "7",
    selectedDate: addDays(ethiopianDateNow(),3),
    selectedTime: "10:00 ቀን",
    fullName: "Lidya Assefa",
    phoneNumber: "0922567890"
  },
  {
    bookingId: "BK014",
    selectedService: "hair-coloring",
    addOns: ["steam-therapy", "deep-conditioning"],
    selectedStylist: "1",
    selectedDate: addDays(ethiopianDateNow(),3),
    selectedTime: "08:15 ቀን",
    fullName: "Mekdes Mulu",
    phoneNumber: "0911765432"
  },
  {
    bookingId: "BK015",
    selectedService: "nail-art",
    addOns: ["extra-nail-art"],
    selectedStylist: "8",
    selectedDate: addDays(ethiopianDateNow(),3),
    selectedTime: "11:00 ቀን",
    fullName: "Blen Yohannes",
    phoneNumber: "0911345678"
  },
  {
    bookingId: "BK016",
    selectedService: "gel-manicure",
    addOns: ["paraffin-wax", "french-tips"],
    selectedStylist: "6",
    selectedDate: addDays(ethiopianDateNow(),1),
    selectedTime: "01:00 ማታ",
    fullName: "Meskerem Legesse",
    phoneNumber: "0911988777"
  },
  {
    bookingId: "BK017",
    selectedService: "glam-party-look",
    addOns: ["false-lashes"],
    selectedStylist: "5",
    selectedDate: addDays(ethiopianDateNow(),2),
    selectedTime: "01:00 ማታ",
    fullName: "Eden Taye",
    phoneNumber: "0922234567"
  },
  {
    bookingId: "BK018",
    selectedService: "acrylic-nails",
    addOns: ["nail-repair"],
    selectedStylist: "6",
    selectedDate: addDays(ethiopianDateNow(),3),
    selectedTime: "03:00 ማታ",
    fullName: "Mahlet Zewdie",
    phoneNumber: "0933456789"
  },
  {
    bookingId: "BK019",
    selectedService: "blowdry-curl",
    addOns: [],
    selectedStylist: "1",
    selectedDate: addDays(ethiopianDateNow(),1),
    selectedTime: "09:30 ቀን",
    fullName: "Selam Debebe",
    phoneNumber: "0911765433"
  },
  {
    bookingId: "BK020",
    selectedService: "classic-manicure",
    addOns: ["hand-foot-massage"],
    selectedStylist: "8",
    selectedDate: addDays(ethiopianDateNow(),2),
    selectedTime: "02:30 ማታ",
    fullName: "Genet Tsegaye",
    phoneNumber: "0911888999"
  },
  {
    bookingId: "BK021",
    selectedService: "protective-styling",
    addOns: ["edge-styling"],
    selectedStylist: "2",
    selectedDate: addDays(ethiopianDateNow(),3),
    selectedTime: "07:30 ቀን",
    fullName: "Feven Alemu",
    phoneNumber: "0911765444"
  },
  {
    bookingId: "BK022",
    selectedService: "bridal-makeup",
    addOns: ["touchup-kit"],
    selectedStylist: "4",
    selectedDate: addDays(ethiopianDateNow(),2),
    selectedTime: "10:00 ቀን",
    fullName: "Dagmawit Tamiru",
    phoneNumber: "0922345555"
  },
  {
    bookingId: "BK023",
    selectedService: "pedicure",
    addOns: ["paraffin-wax"],
    selectedStylist: "7",
    selectedDate: addDays(ethiopianDateNow(),3),
    selectedTime: "08:00 ቀን",
    fullName: "Helina Tesfaye",
    phoneNumber: "0911999888"
  },
  {
    bookingId: "BK024",
    selectedService: "natural-makeup",
    addOns: [],
    selectedStylist: "5",
    selectedDate: addDays(ethiopianDateNow(),1),
    selectedTime: "03:00 ማታ",
    fullName: "Tsion Fikru",
    phoneNumber: "0911222333"
  },
  {
    bookingId: "BK025",
    selectedService: "haircut-styling",
    addOns: ["scalp-massage"],
    selectedStylist: "0",
    selectedDate: addDays(ethiopianDateNow(),2),
    selectedTime: "05:30 ቀን",
    fullName: "Selam Kebede",
    phoneNumber: "0933999777"
  }
];


export function getAvailableSlots(bookingDetails){
    const bookings = mockBookings.filter(booking => isEqual(booking.selectedDate,bookingDetails.selectedDate) && booking.selectedStylist === bookingDetails.selectedStylist)
    
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