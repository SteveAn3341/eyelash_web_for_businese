import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const AppointmentForm = ({ selectedService, selectedEmployee ,customerInfo}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const appointmentDate = selectedDate.toISOString().split('T')[0]; // Format the date
            const appointmentTime = selectedTime + ':00'; // Assuming time in 'HH:mm' format

            const response = await axios.post(`/date/`, {
              customer_info: {
                first_name: customerInfo.first_name,
                last_name: customerInfo.last_name,
                email: customerInfo.email,
                phone: customerInfo.phone,
            },
                date: appointmentDate,
                time: appointmentTime,
                service: selectedService.name,
                employee: selectedEmployee.name
            });
            console.log(response.data);
            // Handle response / redirect to another page
            const appointmentId = response.data.appointment_id; 
            navigate('/final', { state: { appointmentId: response.data.appointment_id } });
        } catch (error) {
            console.error('Error creating appointment:', error);
        }
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Date:</label>
                <DatePicker 
                    selected={selectedDate} 
                    onChange={date => setSelectedDate(date)} 
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                />
            </div>
            <div>
                <label>Time:</label>
                <input 
                    type="time" 
                    value={selectedTime} 
                    onChange={e => setSelectedTime(e.target.value)} 
                    required 
                />
            </div>
             <button type="submit">confrim Appointment</button>
        </form>
        

      </>

    );
};

export default AppointmentForm;