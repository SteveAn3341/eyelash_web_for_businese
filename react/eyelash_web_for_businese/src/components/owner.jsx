import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "./utility";

export const Owner = () => {
  const navigate = useNavigate(); // Assign the navigate function

  const handleLogOut = async (e) => {
    e.preventDefault();
    const logOutSuccess = await LogOut();
    if (logOutSuccess) {
      navigate('/home/'); // Navigate to the home page
    } else {
      alert('Logout failed');
    }
  };

  return (
    <>
      <ul>
        <li><button><Link to='/employee_page' className="employee">Employee</Link></button></li>
        <li><button><Link to="/service_page" className="employee">Service</Link></button></li>
      </ul>

      <button onClick={handleLogOut}>LOG OUT</button>
    </>
  );
};













