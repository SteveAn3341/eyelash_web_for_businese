import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import { Loginfunction } from "./utility";



export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useHistory



  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginSuccess = await Loginfunction(email, password); // Assume Loginfunction returns true if login is successful
      if (loginSuccess) {
        setEmail("");
        setPassword("");
        navigate('/owner/'); // Redirect to the owner page
      } else {
        // Handle login failure
        alert('Login failed. Please check your credentials.'); // Example error handling
      }
    } catch (error) {
      // Handle error (e.g., network error)
      console.error('Login error:', error);
    }
  };





  return (
    
      <div className="form-container">

        <form className='form' onSubmit = {handleLogin }>
          <h3>Log in</h3>
          <input placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
          <input placeholder='password'  onChange={(e) => setPassword(e.target.value)} value={password} />
          <input type='submit' value='Log in' />
        </form>
      </div>

  );
};