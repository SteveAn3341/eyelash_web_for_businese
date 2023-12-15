
import {Menu} from './components/menu'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Gallary} from "./components/gallary"
import {Contact} from './components/contaccts'
import {Main} from './components/layout'
import {AppointmentBooking} from './components/booknow'
import { Employee } from './components/employee'
function App() {


  return (
  <>

  <Router>

  <h1><Main/></h1>
  
<Routes>
  <Route path="/employee" element={<Employee/>} />
 <Route path="/menu" element={<Menu/>} />
 <Route path="/gallary" element={<Gallary/>} />
 <Route path="/contact" element={<Contact/>} />
 <Route path="/booknow" element={<AppointmentBooking/>}/>
</Routes>
</Router>

</>
  )
}

export default App
