import '../App.css'
import {useState} from "react"
import 'react-router-dom'
import {Link} from 'react-router-dom'
import { AddCustomer } from './utility'



export const Customer = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const success = await AddCustomer(name,email,phone);
      if (success) {
        console.log('add customer success');
      } else {
        console.log('add customer failed');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
    
    setName("");
   
  };

  return (
    <>
   
  <div className="form-container">  



  <h2>New Customer</h2>
    <form onSubmit = {handleSubmit} className ='form' >
        <label className = 'lable' htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} value={name}/>

        <label className = 'lable' htmlFor="email">email:</label>
        <input type="text" id="email" email ="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>


        <label className = 'lable' htmlFor="phone">phone</label>
        <input type="text" id="phone" phone ="phone" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
        <input className = 'input' type="submit" value="Add Customer"/>
    </form>
  </div>
  
  
  </>
  )
  
  }