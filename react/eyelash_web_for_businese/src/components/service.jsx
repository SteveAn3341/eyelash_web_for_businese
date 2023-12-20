import '../App.css'
import {useState} from "react"
import 'react-router-dom'
import {Link} from 'react-router-dom'
import { AddService } from './utility'


export const Service = () => {

  const [name,setName] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const success = await AddService(name);
      if (success) {
        console.log('add service success');
      } else {
        console.log('add service failed');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
    
    setName("");
   
  };

  return (
    <>
   
  <div className="form-container">  



  <h2>Add New Service</h2>
    <form onSubmit = {handleSubmit} className ='form' >
        <label className = 'lable' htmlFor="service_name">service_Name:</label>
        <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} value={name}/>
        <input className = 'input' type="submit" value="Add Service"/>
    </form>
  </div>
  
  
  </>
  )
  
  }