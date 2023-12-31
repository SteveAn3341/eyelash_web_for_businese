
import {Menu} from './components/menu'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Gallery} from "./components/gallery"
import {Home} from "./components/home"
import {Contact} from './components/contaccts'
import BookingPage from './components/booknow'
import { Employee } from './components/employee'
import {Service}  from './components/service'
import { Customer } from './components/customer'
import { Login } from './components/login'
import { Owner } from './components/owner'
import { Menu_page } from './components/menu_page'
import AppointmentForm from './components/date'
import {Final} from './components/final'
import ViewAppointments from './components/viewallappointments'

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/employee_page" element={<Employee/>}/>
        <Route path="/menu" element={<Menu/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/booknow" element={<BookingPage/>}/>
        <Route path="/service_page" element={<Service/>}/>
        <Route path="/customer_page" element={<Customer/>}/>
        <Route path="/login_page" element={<Login/>}/>
        <Route path="/owner" element={<Owner/>}/>
        <Route path="/menu_page" element={<Menu_page/>}/>
        <Route path="/date_page" element={<AppointmentForm/>}/>
        <Route path="/final" element={<Final/>}/>
        <Route path="/allappointments" element={<ViewAppointments/>}/>

        
       
      </Routes>
    </Router>
  </>
  )
}





export default App
