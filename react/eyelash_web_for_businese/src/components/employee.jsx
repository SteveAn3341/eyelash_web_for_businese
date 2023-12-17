
import '../App.css'
import { AddEmployee } from './utility'
import {useState} from "react"

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
  )
  
  }