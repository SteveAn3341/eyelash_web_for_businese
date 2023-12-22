import { getToken } from "./csrftoken"
import axios from "axios"





export const AddEmployee = async (name) =>{
  getToken()
  const response = await axios.post(`/employee/`, { name: name })
  console.log(response.data)
  return response.data
}



export const AddService = async (name) =>{
  getToken()
  const response = await axios.post(`/service/`, {service_name: name })
  console.log(response.data)
  return response.data
}












export const AddCustomer = async (first_name, last_name, email, phone) => {
  getToken(); // Assuming this sets up your token for the axios request
  try {
    const response = await axios.post(`/customer/`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
    });

    console.log('Response from AddCustomer:', response.data);

    // Check if the response indicates the customer was added
    if (response.data && response.data.new_customer_added) {
      return {
        new_customer_added: true,
        id: response.data.id // The customer's ID
      };
    } else {
      // Handle the case where the response indicates the customer wasn't successfully added
      console.error('Customer was not added:', response.data);
      return { new_customer_added: false };
    }
  } catch (error) {
    console.error('Error in AddCustomer:', error);
    return { new_customer_added: false, error: error.message };
  }
};













export const All_menu = async () =>{
  getToken()
  const response = await axios.get(`/all_the_menu/`)
  console.log(response.data)
  return response.data
}













export const Loginfunction = async (email, password) => {
// getToken() is not necessary here if you're setting headers directly in the request
getToken()


try {
  // Include postRequestConf in the Axios request
  const response = await axios.post(`/login/`, { email, password }, {
    withCredentials: true // Include this line
  });

  console.log(response);
  // Adjust the following line based on your actual response structure
  if (response.data.success) {
    // Handle login success, e.g., redirecting to another page
    return true;
  } else {
    // Handle login failure
    return false;
  }
} catch (error) {
  console.error('Login error:', error);
  // Handle the error appropriately
  return false;
}
};















export const LogOut = async() => {
  getToken()
  try {
    const response = await axios.post(`/logout/`);
    console.log(response.data);
    return response.data.signout; // Changed from .success to .signout
  } catch (error) {
    console.error('Logout error:', error);
    return false; // In case of an error, return false
  }
}





export const fetchAllEmployees = async () => {
  try {
    const response = await axios.get('/all_the_employee/'); // Adjust the endpoint URL as needed
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    return [];
  }
};




export const FetchCustomer = async (customerId) => {
  const response = await axios.get(`get_customer/${customerId}/`);
  return response.data; 
};