import React, {useEffect, useState} from "react"
import {Link} from 'react-router-dom'

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
const BookingPage = () => {
  const [services, setServices] = useState(initialServices)
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedStylists, setSelectedStylists] = useState([])
  const [visibleStylists, setVisibleStylists] = useState([])

  const toggleStylistList = (serviceId) => {
    setVisibleStylists(prevVisibleStylists => ({
      ...prevVisibleStylists,
      [serviceId]:!preVisibleStylists[serviceId],
    }))
  }

  const handleAddService = (serviceToAdd,stylistToAdd) => {
    setSelectedStylists(prevSelectedStylists => ({
      ...prevSelectedStylists,
      [serviceToAdd.id]: stylistToAdd
    }))
  };

  const fetchStylists = () => {
    return [
      {id: '1', name: 'Medalit L. | Senior Stylist'},
      {id: '2', name: 'Medalit L.2 | Senior Stylist'}
    ]
  }
  const renderStylistOptions = (serviceId,isVisible) =>{
    if (!isVisible) return null;

    /* fetchStylists provide a list of stylists that are available */
    const stylists=fetchStylists();
    return stylists.map(stylist => (
      <button key={stylist.id} onClick={() => handleAddService(services[serviceId], stylist.name)}>
        {stylist.name}
      </button>
    ))
  }
  return (
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
        <Link to ="/service_page"  className="employee">Service</Link>
        <Link to ="/customer_page"  className="employee">Customer</Link>

      </div>
      <div className="book">
          <Link to ="/booknow" className="book-now-button">Book Now &weierp;</Link>
      </div></div>
    <div className = "bookPage" >
      <h1 className="timeline">Book Your Appointment</h1>
        <div className="booking-container">
          <div className="service-list">
            {Object.keys(services).map((category) => (
              <div key={category} className="service-category">
                <h2>{category.replace(/_/g, ' ')}</h2>
                {services[category].map((serviceItem) => (
                  <div key={serviceItem.id} className="service-item">
                    <div className="service-item-name">{serviceItem.name}</div>
                    {/*Render stylist options when Add is clicked*/}
                    {/* {renderStylistOptions(serviceItem.id)} */}
                    <button onClick={() => handleAddService(serviceItem)}>Add</button>
                  </div>
                ))}
              </div>
            ))}
        </div>
        <div className="appointment-summary">
          <h2>Your appointments</h2>
          {selectedServices.length === 0 && <p>Select a service on the left.</p>}
          {selectedServices.map((service) => (
            <div key={serviceItem.id} className="selected-service">
              {serviceItem.name}
            </div>
          ))}
        </div>
      </div>
    </div></>
  )
};

export default BookingPage;