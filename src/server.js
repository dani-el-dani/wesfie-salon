import { createServer, Model, Response } from "miragejs";
import { ethiopianDateNow, addDays, isEqual, toDateString } from "./utils/dateUtils";
import { staffs } from "./staff";
import { mainServices, addOns } from "./services";

const mockBookings = [
  {
    selectedService: "hair-coloring",
    addOns: ["deep-conditioning", "steam-therapy"],
    selectedStylist: "1",
    selectedDate: toDateString(addDays(ethiopianDateNow(),1)),
    selectedTime: "12:00 ማታ",
    fullName: "Liya Abebe",
    phoneNumber: "0911123456"
  },
  {
    selectedService: "traditional-braiding",
    addOns: ["hot-oil-treatment"],
    selectedStylist: "0",
    selectedDate: toDateString(addDays(ethiopianDateNow(),1)),
    selectedTime: "11:00 ቀን",
    fullName: "Sara Tadesse",
    phoneNumber: "0911987654"
  },
  {
    selectedService: "editorial-makeup",
    addOns: ["skin-prep", "eyebrow-tinting"],
    selectedStylist: "3",
    selectedDate: toDateString(addDays(ethiopianDateNow(),1)),
    selectedTime: "12:30 ማታ",
    fullName: "Ruth Mamo",
    phoneNumber: "0922345678"
  },
  {
    selectedService: "bridal-makeup",
    addOns: ["false-lashes", "touchup-kit"],
    selectedStylist: "5",
    selectedDate: toDateString(addDays(ethiopianDateNow(),1)),
    selectedTime: "12:30 ማታ",
    fullName: "Sara Tadesse",
    phoneNumber: "0911987654"
  },
  {
    selectedService: "editorial-makeup",
    addOns: ["skin-prep"],
    selectedStylist: "4",
    selectedDate: toDateString(addDays(ethiopianDateNow(),1)),
    selectedTime: "12:30 ማታ",
    fullName: "Yodit Desta",
    phoneNumber: "0933123456"
  },
  {
    selectedService: "natural-makeup",
    addOns: ["eyebrow-shaping"],
    selectedStylist: "4",
    selectedDate: toDateString(addDays(ethiopianDateNow(),2)),
    selectedTime: "08:00 ቀን",
    fullName: "Hanna Tesfaye",
    phoneNumber: "0911456789"
  },
  {
    selectedService: "hair-coloring",
    addOns: ["scalp-massage", "edge-styling"],
    selectedStylist: "2",
    selectedDate: toDateString(addDays(ethiopianDateNow(),2)),
    selectedTime: "10:00 ቀን",
    fullName: "Mekdes Mulu",
    phoneNumber: "0911765432"
  },
  {
    selectedService: "silk-press",
    addOns: ["deep-conditioning"],
    selectedStylist: "1",
    selectedDate: toDateString(addDays(ethiopianDateNow(),2)),
    selectedTime: "05:30 ቀን",
    fullName: "Mahi Belachew",
    phoneNumber: "0944345678"
  },
  {
    selectedService: "eyelash-extensions",
    addOns: ["skin-prep"],
    selectedStylist: "3",
    selectedDate: toDateString(addDays(ethiopianDateNow(),2)),
    selectedTime: "06:30 ቀን",
    fullName: "Saron Tsegaye",
    phoneNumber: "0912233445"
  },
  {
    selectedService: "traditional-braiding",
    addOns: ["steam-therapy"],
    selectedStylist: "0",
    selectedDate: toDateString(addDays(ethiopianDateNow(),2)),
    selectedTime: "10:00 ቀን",
    fullName: "Samrawit Degu",
    phoneNumber: "0911654321"
  },
  {
    selectedService: "haircut-styling",
    addOns: [],
    selectedStylist: "1",
    selectedDate: toDateString(addDays(ethiopianDateNow(),3)),
    selectedTime: "12:30 ማታ",
    fullName: "Rahel Kassahun",
    phoneNumber: "0911433221"
  },
  {
    selectedService: "cornrows-feedins",
    addOns: ["hot-oil-treatment"],
    selectedStylist: "0",
    selectedDate: toDateString(addDays(ethiopianDateNow(),3)),
    selectedTime: "11:00 ቀን",
    fullName: "Netsanet Belay",
    phoneNumber: "0912121212"
  },
  {
    selectedService: "foot-care",
    addOns: ["hand-foot-massage"],
    selectedStylist: "7",
    selectedDate: toDateString(addDays(ethiopianDateNow(),3)),
    selectedTime: "10:00 ቀን",
    fullName: "Lidya Assefa",
    phoneNumber: "0922567890"
  },
  {
    selectedService: "hair-coloring",
    addOns: ["steam-therapy", "deep-conditioning"],
    selectedStylist: "1",
    selectedDate: toDateString(addDays(ethiopianDateNow(),3)),
    selectedTime: "08:15 ቀን",
    fullName: "Mekdes Mulu",
    phoneNumber: "0911765432"
  },
  {
    selectedService: "nail-art",
    addOns: ["extra-nail-art"],
    selectedStylist: "8",
    selectedDate: toDateString(addDays(ethiopianDateNow(),3)),
    selectedTime: "11:00 ቀን",
    fullName: "Blen Yohannes",
    phoneNumber: "0911345678"
  },
  {
    selectedService: "gel-manicure",
    addOns: ["paraffin-wax", "french-tips"],
    selectedStylist: "6",
    selectedDate: toDateString(addDays(ethiopianDateNow(),1)),
    selectedTime: "01:00 ማታ",
    fullName: "Meskerem Legesse",
    phoneNumber: "0911988777"
  },
  {
    selectedService: "glam-party-look",
    addOns: ["false-lashes"],
    selectedStylist: "5",
    selectedDate: toDateString(addDays(ethiopianDateNow(),2)),
    selectedTime: "01:00 ማታ",
    fullName: "Eden Taye",
    phoneNumber: "0922234567"
  },
  {
    selectedService: "acrylic-nails",
    addOns: ["nail-repair"],
    selectedStylist: "6",
    selectedDate: toDateString(addDays(ethiopianDateNow(),3)),
    selectedTime: "03:00 ማታ",
    fullName: "Mahlet Zewdie",
    phoneNumber: "0933456789"
  },
  {
    selectedService: "blowdry-curl",
    addOns: [],
    selectedStylist: "1",
    selectedDate: toDateString(addDays(ethiopianDateNow(),1)),
    selectedTime: "09:30 ቀን",
    fullName: "Selam Debebe",
    phoneNumber: "0911765433"
  },
  {
    selectedService: "classic-manicure",
    addOns: ["hand-foot-massage"],
    selectedStylist: "8",
    selectedDate: toDateString(addDays(ethiopianDateNow(),2)),
    selectedTime: "02:30 ማታ",
    fullName: "Genet Tsegaye",
    phoneNumber: "0911888999"
  },
  {
    selectedService: "protective-styling",
    addOns: ["edge-styling"],
    selectedStylist: "2",
    selectedDate: toDateString(addDays(ethiopianDateNow(),3)),
    selectedTime: "07:30 ቀን",
    fullName: "Feven Alemu",
    phoneNumber: "0911765444"
  },
  {
    selectedService: "bridal-makeup",
    addOns: ["touchup-kit"],
    selectedStylist: "4",
    selectedDate: toDateString(addDays(ethiopianDateNow(),2)),
    selectedTime: "10:00 ቀን",
    fullName: "Dagmawit Tamiru",
    phoneNumber: "0922345555"
  },
  {
    selectedService: "pedicure",
    addOns: ["paraffin-wax"],
    selectedStylist: "7",
    selectedDate: toDateString(addDays(ethiopianDateNow(),3)),
    selectedTime: "08:00 ቀን",
    fullName: "Helina Tesfaye",
    phoneNumber: "0911999888"
  },
  {
    selectedService: "natural-makeup",
    addOns: [],
    selectedStylist: "5",
    selectedDate: toDateString(addDays(ethiopianDateNow(),1)),
    selectedTime: "03:00 ማታ",
    fullName: "Tsion Fikru",
    phoneNumber: "0911222333"
  },
  {
    selectedService: "haircut-styling",
    addOns: ["scalp-massage"],
    selectedStylist: "0",
    selectedDate: toDateString(addDays(ethiopianDateNow(),2)),
    selectedTime: "05:30 ቀን",
    fullName: "Selam Kebede",
    phoneNumber: "0933999777"
  }
]

createServer({
    models: {
        bookings: Model,
        staffs: Model,
        mainServices: Model,
        addOns: Model
    },

    seeds(server) {
        mockBookings.forEach(item => server.create('booking', item))
        staffs.forEach(staff => server.create('staff', staff))
        mainServices.forEach(mainService => server.create('mainService', mainService))
        addOns.forEach(addOn => server.create('addOn', addOn))
    },

    routes(){
        this.namespace = "api"
        // this.logging = false
        this.timing = 2000

        this.get("/salondata", (schema) => {
          const staffs = schema.staffs.all().models.map(staff => (
            {id:staff.id,
              name: staff.name,
              info: staff.info,
              spaciality: staff.spaciality,
              imageUrl: staff.imageUrl
            }))
          
          const mainServices = schema.mainServices.all().models
          const addOns = schema.addOns.all().models
          if(Math.random() > 0.25){
            return {staffs, mainServices, addOns}
          }
          else{
            return new Response(
                400,
                { some: "header" },
                { errors: ["name cannot be blank"] }
              )
            }
        })

        this.get("/bookings", (schema, request) => {
            return schema.bookings.all()
        })

        this.get("/bookings/:stylist/:date", (schema, request) => {
            const stylist = request.params.stylist
            const date = request.params.date
            return schema.bookings.where({selectedStylist:stylist, selectedDate:date})
        })

        this.post("/book", (schema, request) => {
          const newBooking = JSON.parse(request.requestBody)
          if(Math.random() > 0.25){
            return schema.bookings.create(newBooking)
          }
          else{
            return new Response(
              400,
              { some: "header" },
              { errors: ["Error occured during booking"] }
            )
          }
          
        })


        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            const foundUser = schema.staffs.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})