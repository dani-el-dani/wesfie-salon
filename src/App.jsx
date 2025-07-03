import Layout from "./components/Layout"
import Home from "./pages/Home"
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, ScrollRestoration, Routes } from "react-router"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import Booking from "./pages/Booking"
import './server'
import MySchedule, {loader as myScheduleLoader} from "./pages/myschedule"
import StaffLayout from "./components/StaffLayout"
import Login, { action as loginAction, loader as loginLoader}from "./pages/Login"

const router = createBrowserRouter(createRoutesFromElements(
  [
    <Route element={
        <>
          <ScrollRestoration/>
          <Layout/>
        </>}>
      <Route index element={<Home/>}/>
      <Route path="services" element={<Services/>} />
      <Route path="aboutus" element={<AboutUs/>} />
      <Route path="booking" element={<Booking/>} />
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
