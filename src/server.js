import { createServer, Model } from "miragejs";
import { ethiopianDateNow, addDays, isEqual } from "./dateUtils";
import { mockBookings } from "./utils/timeUtils";

createServer({
    models:{
        booking : Model
    },

    seeds(server){
        mockBookings.forEach(item => server.create('booking', item))
        
    },

    routes(){
        this.namespace = "api"

        this.get("/bookings", (schema) =>{
            return schema.all()
        })
    }
})