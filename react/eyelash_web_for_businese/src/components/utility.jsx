import { getToken } from "./csrftoken"
import axios from "axios"

export const AddEmployee = async (name) =>{
  getToken()
  const response = await axios.post(`/employee/`, { name: name })
  console.log(response.data)
  return response.data
}
