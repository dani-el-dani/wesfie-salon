import Layout from "./components/Layout"
import Home from "./pages/Home"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import Booking from "./pages/Booking"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="services" element={<Services/>} />
      <Route path="aboutus" element={<AboutUs/>} />
      <Route path="booking" element={<Booking/>} />
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App
