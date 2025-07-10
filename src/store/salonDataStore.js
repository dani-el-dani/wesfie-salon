import { create } from "zustand";
import { addOns, mainServices } from "../services";

const useSalonDataStore = create((set) => ({
    staffs: [],
    mainServices: [],
    addOns: [],

    loadSalonData: (data) => {
        set(data)        
    }
}))


export default useSalonDataStore