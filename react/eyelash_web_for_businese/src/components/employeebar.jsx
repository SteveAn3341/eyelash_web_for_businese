import "../App.css"
import { fetchAllEmployees } from "./utility";
import React, { useRef, useEffect } from 'react';
import {useState} from 'react'
export const EmployeeBar = ({ service, showEmployeeBar ,onClose ,onSelectEmployee  }) => {

  const [employees, setEmployees] = useState([]);

  const employeeBarRef = useRef()

  useEffect(() => {
    if (showEmployeeBar) {
      const loadEmployees = async () => {
        const employeeData = await fetchAllEmployees();
        setEmployees(employeeData);
      };
      loadEmployees();
    }
  }, [showEmployeeBar]);





  useEffect(() => {
    const handleClickOutside = (event) => {
      if (employeeBarRef.current && !employeeBarRef.current.contains(event.target)) {
        onClose(); // Call the onClose function passed as a prop
      }
    };
    if (showEmployeeBar) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEmployeeBar, onClose]);






  if (!service) return null; // Don't render if no service is active
  if (!showEmployeeBar) return null;



  
  return (
    <div className="employee-bar" ref={employeeBarRef}>
    <li>{service.name}</li>


    {employees.map((employee, index) => (
      
      <div key={index} className="employee-entry" >
        
        <img 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB6klEQVR4nO3YO0scURjG8b/BlYgiWUUWQZAVMVZWQUwj4gcQCy+FnaiFnYUYFRREG9t8gBQSVAQxRQTBQkQLwcIbWBhIJXgXtDCi7pGBYzO42d3Zc1ucB55ymfPbmTkz80KYMGFsJQ58A+aAXeAvsA6MAlFyIHXAKvAMiCQ9BVaAH0ArkI9j6QXu/wNI1m2gEkfSneIspOohUGgbURPwTPg7bhvyWwHi9d4psIWoBRKKIAJosQWZVogQwJQtyI5iyLINRAnwpBhyZAPSoBghgBtbzw7VkAQQMQ0Z1AARQLFpyKQmSNQ05LsmSMw0ZFYTpNI0ZEkTpCpX37H8jZuGrGmCVJuGbGqCfDYNOdYE+WoacqcJ0mYS8UkTQgADJiEdGiGLJiH7GiHPJrfgsSynJsl6C4wAeRiengwBv4CTLBbv/XYB6AHKcCBFQD3wJ43FXwBf5Femk4kAZ2lAvK37Iw5nIoNLagYHUyqH0pnOuH4C5TiQmBx1nmdxs1/Kr80KG4Am+W/+U7j1PgDzQLPu7fcD0A7saXwYCtkDoFMeU2kaDQGEr/vy2ErSBzxaQAhZ79j92SK6FE/bgzYhL7VA8eZLVw4ghOx10FeYYQcWL3z13u0yzpYDCxe+bgSBXDuwcPHGwzNMmDDvNS8caXXdrPJbdQAAAABJRU5ErkJggg=="
          alt="Employee"
          className="employee-image"
        />
        
        <button onClick={() => {console.log("Employee clicked:", employee); onSelectEmployee(employee, service.id)} }>{employee.name}</button>
      </div>
    ))}
  </div>
);
};
