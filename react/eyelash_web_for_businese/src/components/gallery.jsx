import {Link} from 'react-router-dom'
import "../App.css"

export const Gallery = () => {


  return(
    <>
    <div className='headeres'>
      <div className='logo'>
          <img src="https://static.vecteezy.com/system/resources/previews/022/892/565/original/eyelashes-logo-design-with-unique-style-for-woman-free-vector.jpg" alt="logo"/>
      </div>
      <div className='category'>

        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/menu"  className="nav-link">Menu</Link>
        <Link to="/gallery"  className="nav-link">Gallery</Link>
        <Link to="/contact"  className="nav-link">Contact</Link>
        <Link to ='/employee_page'  className="employee">emloyee</Link>
      </div>
      <div className="book">
          <Link to ="/booknow" className="book-now-button">Book Now &weierp;</Link>
      </div></div>
  <div className = 'gallery'>

  <h1 >Gallery</h1>
  <h2>Our Signature Aesthetic</h2>
    <div className = 'image-grid'>
      <img src = 'https://t3.ftcdn.net/jpg/02/26/18/56/240_F_226185607_HfhYdRPohD1Wb62E1Mgg6ZmsQkbNk5lr.jpg'></img>
      <img src = 'https://t3.ftcdn.net/jpg/03/77/15/56/240_F_377155680_BlKZOlvxGPTaxabrWLbLOURjqWQgi3Wj.jpg'></img>
      <img src = 'https://t3.ftcdn.net/jpg/05/46/70/64/240_F_546706490_HfLWUWrUiYe0RPKwvaD08srwsIbpqTBM.jpg'></img>
      <img src = 'https://t4.ftcdn.net/jpg/05/78/02/13/240_F_578021309_3nhIin7G9WKRL21cR6wpgUiNMCBy8zGh.jpg'></img>
      <img src = 'https://t4.ftcdn.net/jpg/02/75/85/71/240_F_275857153_EI3cPuXW96e3T14Dh6nCUXC0QpKfdBah.jpg'></img>
      <img src = 'https://t3.ftcdn.net/jpg/04/93/41/16/240_F_493411681_aIXYEkLEBF7RLf7wwRB6aRlcF4IsUqbM.jpg'></img>
      <img src = 'https://media.istockphoto.com/id/1320776893/photo/cosmetologist-making-eyelash-extention-and-correction-using-brush.jpg?s=612x612&w=0&k=20&c=mr64RP6tlDCxuU-Bk206xT4mRKrV3m0uMCly5IYqDi8='></img>
      <img src = 'https://media.istockphoto.com/id/1156131341/photo/female-eyes-with-long-false-eyelashes-befor-and-after-change.jpg?s=612x612&w=0&k=20&c=TFoTm6jYyn2APKK7uUx-4K1AiUP1QyGvKQ1XuRv33Oo='></img>
      <img src = 'https://media.istockphoto.com/id/648878964/photo/woman-eye-with-long-eyelashes-eyelash-extension-lashes-close-up-selective-focus.jpg?s=612x612&w=0&k=20&c=6rfCb6VvKLUhchmCrSEDQeQzfaAISOSqz10Sv3JlF6I='></img>
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