import {Link} from "react-router-dom"
import '../App.css'
export const Home=()=>{
    return (
        <div>
            <div className='headeres'>
      <div className='logo'>
          <img src="https://static.vecteezy.com/system/resources/previews/022/892/565/original/eyelashes-logo-design-with-unique-style-for-woman-free-vector.jpg" alt="logo"/>
      </div>
      <div className='category'>
        <Link to className="nav-link">Home</Link>
        <Link to="/menu"  className="nav-link">Menu</Link>
        <Link to="/gallery"  className="nav-link">Gallery</Link>
        <Link to="/contact"  className="nav-link">Contact</Link>
        <Link to ='/employee'  className="employee">Emloyee</Link>
      </div>
      <div className="book">
          <Link to ="/booknow" className="book-now-button">Book Now &weierp;</Link>
      </div></div>
        <h3>Home </h3>
        <h3>Home </h3>
        <h3>Home </h3>
        </div>
    )
}