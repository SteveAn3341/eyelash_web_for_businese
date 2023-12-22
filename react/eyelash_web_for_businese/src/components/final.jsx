import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export const Final = () => {
    const { state } = useLocation();
    const [appointmentDetails, setAppointmentDetails] = useState(null);

    useEffect(() => {
        if (state.appointmentId) {
            const fetchAppointment = async () => {
                try {
                    const response = await axios.get(`/appointments/${state.appointmentId}/`);
                    console.log(state.appointmentId)
                    console.log("Response data:", response.data);
                    console.log("Customer info:", response.data.customer_info); 
                    setAppointmentDetails(response.data);
                    
                } catch (error) {
                    console.error('Error fetching appointment:', error.response ? error.response.data : error.message);
                }
            };
            fetchAppointment();
        }
    }, [state.appointmentId]); // Make sure to include the dependency here

    if (!appointmentDetails) {
        return <div>Loading...</div>;
    }

    const customerInfo = appointmentDetails.customer_info || {};
    return (
        <li >
          <h2>Appointment Details</h2>
            <p>Service: {appointmentDetails.service}</p>
            <p>Date: {appointmentDetails.date}</p>
            <p>Time: {appointmentDetails.time}</p>
            <p>Employee: {appointmentDetails.employee}</p>
            <p>Customer Name: {customerInfo.first_name} {customerInfo.last_name}</p>
            <p>Email: {customerInfo.email}</p>
            <p>Phone: {customerInfo.phone}</p>
            {/* Add more details as needed */}
        </li>
    );
};

