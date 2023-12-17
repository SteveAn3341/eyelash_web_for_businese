import { getToken } from "./csrftoken"
import axios from "axios"

export const AddEmployee = async () =>{
  getToken()
  const response = await axios.post(`/employee_add/`)
  console.log(response.data)
  return response.data
}
