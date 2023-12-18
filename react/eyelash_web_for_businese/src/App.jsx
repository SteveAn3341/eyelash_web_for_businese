
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
      </Routes>
    </Router>
  </>
  )
}





export default App
