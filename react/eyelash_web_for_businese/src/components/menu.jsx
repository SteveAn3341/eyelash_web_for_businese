import '../App.css'
import {Link} from 'react-router-dom'

export const Menu = () =>{

  return(
    <>
    <div className='headeres'>
      <div className='logo'>
          <img src="https://static.vecteezy.com/system/resources/previews/022/892/565/original/eyelashes-logo-design-with-unique-style-for-woman-free-vector.jpg" alt="logo"/>
      </div>
      <div className='category'>
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/menu"  className="nav-link">Menu</Link>
        <Link to="/gallery"  className="nav-link">Gallery</Link>
        <Link to="/contact"  className="nav-link">Contact</Link>
        <Link to ='/employee_page'  className="employee">emloyee</Link>
        <Link to ="/service_page"  className="employee">Service</Link>
        <Link to ="/customer_page"  className="employee">Customer</Link>
      </div>
      <div className="book">
          <Link to ="/booknow" className="book-now-button">Book Now &weierp;</Link>
      </div>

    </div>
    <div>
        <div className = 'menu'>
          <h1 >EYELASH EXTENTION</h1>
            <button className = 'menu_button'>menu<br/>
            </button>
          
        </div>
        <div className="bottom">
            <p>11135 1st Ave,<br/>
              Whittier, CA 90603<br/> 
              562-315-5517<br/> 
              ohwaxingstudio@gmail.com<br/>
        <br/></p>
        </div>
    </div></>
  )


}