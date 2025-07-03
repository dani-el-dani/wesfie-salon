import { create } from "zustand";


const useAuthStore = create((set) => ({
    user : JSON.parse(localStorage.getItem('loggedin')) || null,
    login : (data) => {
        set({user:{...data, loggedIn:true}})
        localStorage.setItem('loggedin', JSON.stringify({...data, loggedIn:true}))
    },
    logout : () => {
        set({user:null})
        localStorage.removeItem('loggedin')
    }
}))

export default useAuthStore