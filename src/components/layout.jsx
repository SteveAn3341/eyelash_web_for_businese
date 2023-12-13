import "../App.css"
import {Link} from 'react-router-dom'


export const Main = ()=>{

  return(
<>
<div className='headeres'>
    <div className='logo'>
        <img src="https://static.vecteezy.com/system/resources/previews/022/892/565/original/eyelashes-logo-design-with-unique-style-for-woman-free-vector.jpg" alt="logo"/>
    </div>
    <div className='category'>
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/menu"  className="nav-link">Menu</Link>
    <Link to="/gallary"  className="nav-link">Gallary</Link>
    <Link to="/contact"  className="nav-link">Contact</Link>

    </div>
    <div className="book">
        <button>Book Now &weierp;</button>
    </div>

</div>

<div className="page-content">
    
</div>



</>
    
    
  )
}