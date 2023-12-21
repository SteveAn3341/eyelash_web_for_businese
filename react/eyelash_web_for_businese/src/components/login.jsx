import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import { Loginfunction } from "./utility";
import {Link} from 'react-router-dom'


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
    
      // <div className="form-container">

      //   <form className='form' onSubmit = {handleLogin }>
      //     <h3>Log in</h3>
      //     <input placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
      //     <input placeholder='password'  onChange={(e) => setPassword(e.target.value)} value={password} />
      //     <input type='submit' value='Log in' />
      //   </form>
      // </div>



      <section class="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit = {handleLogin } >

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="firstName" class="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <label className="form-label" for="firstName">email</label>
                  </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="lastName" class="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} value={password}  />
                    <label className="form-label" for="lastName">password</label>
        
                </div>
              </div>
              

              <div className="mt-4 pt-2">
                <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


  <button><Link to="/home" className="nav-link">Home</Link></button>


</section>

  );
};

