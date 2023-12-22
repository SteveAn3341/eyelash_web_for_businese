import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('/viewappointments/');
                setAppointments(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching appointments:', error);
                setError('Error fetching appointments');
                setIsLoading(false);
            }
        };
        fetchAppointments();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>All Appointments</h2>
            {appointments.length === 0 ? (
                <p>No appointments found</p>
            ) : (
                <ul>
                    {appointments.map((appointment, index) => {
                        const customerInfo = appointment.customer_info || {};
                        return (
                            <li key={index}>
                                <p>Service: {appointment.service}</p>
                                <p>Date: {appointment.date}</p>
                                <p>Time: {appointment.time}</p>
                                <p>Employee: {appointment.employee}</p>
                                <p>Customer Name: {customerInfo.first_name} {customerInfo.last_name}</p>
                                <p>Email: {customerInfo.email}</p>
                                <p>Phone: {customerInfo.phone}</p>
                                {/* Add more details as needed */}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default ViewAppointments;