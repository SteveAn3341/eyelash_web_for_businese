
import {Menu} from './components/menu'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Gallery} from "./components/gallery"
import {Contact} from './components/contaccts'
import {Main} from './components/layout'
import BookingPage from './components/booknow'
import { Employee } from './components/employee'
function App() {


  return (
  <>
  <Router>
    <h1><Main/></h1>
    <Routes>
      <Route path="/employee" element={<Employee/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/booknow" element={<BookingPage/>}/>
    </Routes>
  </Router>
</>
  )
}

export default App
