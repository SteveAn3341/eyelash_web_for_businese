import React, {useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import { Home } from './home'
import {EmployeeBar} from "./employeebar"

import AppointmentForm from './date'
import { useLocation } from 'react-router-dom';



















const BookingPage = () => {














  const location = useLocation();
  const customerInfo = location.state?.customerInfo;
  console.log(customerInfo)
  const initialServices={
    Eyelash_Extension_Refills: [
      {id:1, name: 'Classic Refill'},
      {id:2, name: 'Hybrid Refill'},
      {id:3, name: 'Volume Refill'}
    ],
    Eyelash_Extension_Fullset: [
      {id:4, name: 'Eyelash Consultation'},
      {id:5, name: 'Classic: Level 1 Full Set (Full)'},
      {id:6, name: 'Classic: Level 2 Full Set (Fuller)'},
      {id:7, name: 'Classic: Level 3 Full Set (Fullest)'},
      {id:8, name: 'Hybrid: Level 1 Full Set (Full)'},
      {id:9, name: 'Hybrid: Level 2 Full Set (Full)'},
      {id:10, name: 'Hybrid: Level 3 Full Set (Full)'},
  
    ],
    Lifts_or_Brows: [
      {id:11, name:'Lash Lift'},
      {id:12, name:'Bow Lamination'},
    ],
    Permanent_Makeup: [
      {id:13, name: 'Consulation'},
      {id:14, name: 'Microblading'},
      {id:15, name: 'Microblading Follow Up'}
    ],
    Tinting: [
      {id:16, name: 'Lash & Brow Tinting'},
      {id:17, name: 'Lash Tinting'},
      {id:18, name: 'Brow Tinting'}
    ]
  }


  const [services, setServices] = useState(initialServices)
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedStylists, setSelectedStylists] = useState([])


  
  const [activeService, setActiveService] = useState(null);
  const [showEmployeeBar, setShowEmployeeBar] = useState(false);




  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState({});



  
  const handleAddService = (serviceToAdd) => {
    setShowEmployeeBar(true);
    setActiveService(serviceToAdd);
    setSelectedServices([...selectedServices, serviceToAdd]); 
    console.log(selectedServices);
    
   
  };







  const handleCloseEmployeeBar = () => {
    setShowEmployeeBar(false); // Set showEmployeeBar to false to hide the EmployeeBar
  };




  const handleSelectEmployee = (employee, serviceId) => {
    console.log("Employee selected:", employee, "Service ID:", serviceId);
    console.log("Type of Service ID:", typeof serviceId); // Should be 'number' or 'string'
    console.log("Employee Object:", employee); // Should be an object
  
    setSelectedEmployee(prevEmployees => ({
      ...prevEmployees,
      [serviceId]: employee // Ensure this is correctly setting the employee object
    }));
  };







  return (
    <>




    <Home/>












    <div className = "bookPage" >
      <h1 className="timeline">Book Your Appointment</h1>
        <div className="booking-container">
          <div className="service-list">
            {Object.keys(services).map((category) => (
              <div key={category} className="service-category">
                <h2>{category.replace(/_/g, ' ')}</h2>

                {services[category].map((serviceItem) => (
                  <div key={serviceItem.id} className="service-item-container">
                     <div className="service-item">
                    <div className="service-item-name">{serviceItem.name}</div>
                    {/*Render stylist options when Add is clicked*/}
                    {/* {renderStylistOptions(serviceItem.id)} */}
                    <button onClick={() => handleAddService (serviceItem)}>Add</button>
                    </div>

                    {activeService && activeService.id === serviceItem.id && showEmployeeBar && (
      <div className="employee-bar-container">
      <EmployeeBar service={activeService} showEmployeeBar={showEmployeeBar}  onClose= {handleCloseEmployeeBar}  onSelectEmployee={handleSelectEmployee} />




      </div>
    )}
                  </div>

                ))}
              </div>
            ))}
        </div>



























  
  
  
  
  
  
  


  <div className="booking-container">
        {customerInfo && (
          <div className="customer-info">
            <h2>Customer Information</h2>
            <p>Name: {customerInfo.first_name} {customerInfo.last_name}</p>
            <p>Email: {customerInfo.email}</p>
            <p>Phone: {customerInfo.phone}</p>
          </div>
        )}
</div>

        <div className="appointment-summary">
  <h2>Your appointments</h2>
  {selectedServices.length === 0 && <p>Select a service on the left.</p>}
  {selectedServices.map((service, index) => (
    <div key={index} className="selected-service">
      <p>Service: {service.name}</p>
      {selectedEmployee[service.id] && (
        <p>Selected Employee: {selectedEmployee[service.id].name}</p>
        
      )}
    <AppointmentForm  selectedService={service} 
                        selectedEmployee={selectedEmployee[service.id]}       customerInfo={customerInfo} />
    </div>
  ))}
</div>
  
        </div>
      </div>
    
    
    



    </>
   
  )

          }
export default BookingPage;