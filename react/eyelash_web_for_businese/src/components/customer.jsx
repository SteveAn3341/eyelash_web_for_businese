import '../App.css'
import {useState} from "react"
import 'react-router-dom'
import {Link} from 'react-router-dom'
import { AddCustomer } from './utility'
import { useNavigate } from "react-router-dom";

export const Customer = () => {

  const [first_name,setFirstName] = useState("")
  const[last_name,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const success = await AddCustomer(first_name, last_name, email, phone);
      if (success) {
        console.log('add customer success');
        setEmail(" ")
        setFirstName(" ")
        setLastName(" ")
        setPhone(" ")
        navigate('/booknow/');
      } else {
        console.log('add customer failed');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
    
    
   
  };

  return (
    <>
   
  <div className="form-container">  



  
    <form onSubmit = {handleSubmit} className ='form' >


       <li> <label className = 'lable' htmlFor="first_name">first_Name: </label>
        <input type="text" id="first_name" name="first_name" onChange={(e)=>setFirstName(e.target.value)} value={first_name}/></li>

        <li><label className = 'lable' htmlFor="last_name">last_Name: </label>
        <input type="text" id="last_name" name="last_name" onChange={(e)=>setLastName(e.target.value)} value={last_name}/></li>

        <li><label className = 'lable' htmlFor="email">email: </label>
        <input type="text" id="email" email ="email" onChange={(e)=>setEmail(e.target.value)} value={email}/></li>


        <li> <label className = 'lable' htmlFor="phone">phone: </label>
        <input type="text" id="phone" phone ="phone" onChange={(e)=>setPhone(e.target.value)} value={phone}/></li>





        <p><input className = 'input' type="submit" value="Add Customer"/></p>
    </form>

    

  </div>
  
  <button><Link to="/home" className="nav-link">Home</Link></button>
  </>
  )
  
  }