import '../App.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'



export const Menu = () =>{










  const [buttonClass, setButtonClass] = useState('');

  const handleMouseEnter = () => {
      setButtonClass('hover');
      document.querySelector('.submit h3').textContent = "Now";
  };

  const handleMouseLeave = () => {
      setButtonClass('');
      document.querySelector('.submit h3').textContent = "Book";
  };

  const handleClick = () => {
      setButtonClass('active');
  };

  return(
    <>
    
    
            <div className='headeres'>
      <div className='logo'>
          <img src="https://static.vecteezy.com/system/resources/previews/022/892/565/original/eyelashes-logo-design-with-unique-style-for-woman-free-vector.jpg" alt="logo"/>
      </div>
      <div className='category'>
        <Link to ="/login_page"   className="employee">Login</Link>
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/menu"  className="nav-link">Menu</Link>
        <Link to="/gallery"  className="nav-link">Gallery</Link>
        <Link to="/contact"  className="nav-link">Contact</Link>
        <Link to ="/customer_page"  className="employee">Customer</Link>
      </div>
      <div className=" mov">

      <body className="whole_body">
		<div className={`button ${buttonClass}`}


            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}>
   
   <Link to ="/booknow" className="book-now-button"><div className="submit"><h3>Book </h3></div></Link>
			<div className="arrow">
				<div className="top line"></div>
				<div className="bottom line"></div>
			</div>
		</div>
		<p className="instructions">Hover and then click</p>
	</body>

      </div></div>










    <div>
        <div className = 'menu'>
          <h1 >EYELASH EXTENTION</h1>
            <button className = 'menu_button'>menu<br/>
            </button>
          
        </div>
        <div className="bottom_l">
            <p>11135 1st Ave,<br/>
              Whittier, CA 90603<br/> 
              562-315-5517<br/> 
              ohwaxingstudio@gmail.com<br/>
        <br/></p>
        </div>
    </div></>
  )


}