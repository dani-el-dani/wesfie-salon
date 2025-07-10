import Layout from "./components/Layout"
import Home from "./pages/Home"
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, ScrollRestoration, Routes } from "react-router"
import Services, {loader as ServicesLoader} from "./pages/Services"
import AboutUs, {loader as AboutUsLoader} from "./pages/AboutUs"
import Booking, {loader as BookingLoader} from "./pages/Booking"
import './server'
import MySchedule, {loader as myScheduleLoader}from "./pages/MySchedule"
import StaffLayout from "./components/StaffLayout"
import Login, { action as loginAction, loader as loginLoader}from "./pages/Login"
import Error from "./pages/Error"

const router = createBrowserRouter(createRoutesFromElements(
  [
    <Route element={
        <>
          <ScrollRestoration/>
          <Layout/>
        </>}>
      <Route index element={<Home/>}/>
      <Route path="services" element={<Services/>} loader={ServicesLoader}/>
      <Route path="aboutus" element={<AboutUs/>} loader={AboutUsLoader}/>
      <Route path="booking" element={<Booking/>} loader={BookingLoader}/>
    </Route>,
    <Route element={
      <>
        <ScrollRestoration/>
        <StaffLayout />
      </>
    }>
      <Route path="myschedule" element={<MySchedule/>} loader={myScheduleLoader}/>
      <Route path="login" element={<Login />} action={loginAction} loader={loginLoader}/>
    </Route>
  ]
  
  
))

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
