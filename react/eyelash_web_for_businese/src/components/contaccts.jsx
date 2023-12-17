
import "../App.css"
import {Link} from 'react-router-dom'

export const Contact = () =>{
return(
  <>
  <div className='headeres'>
      <div className='logo'>
          <img src="https://static.vecteezy.com/system/resources/previews/022/892/565/original/eyelashes-logo-design-with-unique-style-for-woman-free-vector.jpg" alt="logo"/>
      </div>
      <div className='category'>
<<<<<<< HEAD
        <Link to = "/" className="nav_link" >Home</Link>
       
=======
        <Link to="/home" className="nav-link">Home</Link>
>>>>>>> 62c34368a376e9ce058a239bb7df89be6f054337
        <Link to="/menu"  className="nav-link">Menu</Link>
        <Link to="/gallery"  className="nav-link">Gallery</Link>
        <Link to="/contact"  className="nav-link">Contact</Link>
        <Link to ='/employee'  className="employee">emloyee</Link>
      </div>
      <div className="book">
          <Link to ="/booknow" className="book-now-button">Book Now &weierp;</Link>
      </div></div>
  <div className="contact_page">
    <div className="contact_container">
      <div className="contact_info">
        <h1 className ='contact'> CONTACT US </h1>
          <p>11135 1st Ave,<br/>
          Whittier, CA 90603<br/> 
          562-315-5517<br/> 
          ohwaxingstudio@gmail.com</p>
      </div>

    <div className="iframe-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3993.987438891508!2d-117.99016746797899!3d33.931375834127586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d4cdd9905e69%3A0x395bd3d2726524ec!2s11135%201st%20Ave%2C%20Whittier%2C%20CA%2090603!5e0!3m2!1sen!2sus!4v1702568208118!5m2!1sen!2sus" 
        width="600" height="450" style={{border:0}} 
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>

  <div className="bottom">
        <p>11135 1st Ave,<br/>
        Whittier, CA 90603<br/> 
        562-315-5517<br/> 
        ohwaxingstudio@gmail.com</p>
    </div>
    </div></>
)
}