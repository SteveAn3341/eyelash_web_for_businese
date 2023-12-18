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




export const AddCustomer = async (name,email,phone) =>{
  getToken()
  const response = await axios.post(`/customer/`, {name: name , email:email , phone: phone})
  console.log(response.data)
  return response.data
}



export const Loginfunction = async(email, password) =>{
  getToken()
  const response = await axios.post(`/login/`, {
    email: email,
    password: password
  })

console.log(response);
console.log(response.data.success);
window.location.reload()

  return response.data.Loginfunction;
}


export const LogOut = async() =>{
  getToken()
  const response = await axios.post(`/logout/`)
console.log(response.data.success);
window.location.reload()

  return response.data.LogOut;
}
