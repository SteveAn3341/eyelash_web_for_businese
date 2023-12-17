import '../App.css'
import { AddEmployee } from './utility'
import {useState} from "react"
import 'react-router-dom'
import {Link} from 'react-router-dom'


export const Employee = () => {

  const [name,setName] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const success = await AddEmployee(name);
      if (success) {
        console.log('add employee success');
      } else {
        console.log('add employee failed');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
    
    setName("");
   
  };

  return (
    <>
    <div className='headeres'>
      <div className='logo'>
          <img src="https://static.vecteezy.com/system/resources/previews/022/892/565/original/eyelashes-logo-design-with-unique-style-for-woman-free-vector.jpg" alt="logo"/>
      </div>

      
      <div className='category'>
        <Link to="/home"  className="nav-link">Home</Link>
        <Link to="/menu"  className="nav-link">Menu</Link>
        <Link to="/gallery"  className="nav-link">Gallery</Link>
        <Link to="/contact"  className="nav-link">Contact</Link>
        <Link to ='/employee_page'  className="employee">emloyee</Link>
      </div>



      <div className="book">
          <Link to ="/booknow" className="book-now-button">Book Now &weierp;</Link>
      </div></div>
  <div className='body'>
  <div className="form-container">  



  <h2>Add New Employee</h2>
    <form onSubmit = {handleSubmit} className ='form' >
        <label className = 'lable' htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} value={name}/>
        <input className = 'input' type="submit" value="Add Employee"/>
    </form>
  </div>
  
  </div>
  </>
  )
  
  }