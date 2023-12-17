
import {Menu} from './components/menu'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Gallery} from "./components/gallery"
import {Home} from "./components/home"
import {Contact} from './components/contaccts'
import BookingPage from './components/booknow'
import { Employee } from './components/employee'
function App() {
  return (
  <>
<<<<<<< HEAD
  <Router>
    <h1><Main/></h1>
    <Routes>
      <Route path = "/" element = {<Main/>} />
      <Route path="/employee" element={<Employee/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/booknow" element={<BookingPage/>}/>
    </Routes>
  </Router>
</>
=======
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/menu" element={<Menu/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/booknow" element={<BookingPage/>}/>
      </Routes>
    </Router>
  </>
>>>>>>> 62c34368a376e9ce058a239bb7df89be6f054337
  )
}

export default App
