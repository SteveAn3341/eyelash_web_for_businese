import { All_menu } from "./utility"
import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'



export const Menu_page =  () => {

  const [services, setServices] = useState([]);

  useEffect( ()=>{

  const fetchMenu = async () => {
    const menuData = await All_menu();
    setServices(menuData);}
    fetchMenu();

},[])



  return (



    <>
    
    
    <ul>
      {services.map(service =>(
        <li key = {service.id}>{service.service_name}</li>)
      )}
     



    </ul>
    
    <button><Link to="/home" className="nav-link">Home</Link></button>
    
    </>
  )
}