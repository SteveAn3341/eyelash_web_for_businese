import { getToken } from "./csrftoken"


export const AddEmployee = async () =>{
  getToken()
  const response = await axios.get(`/employee/`)
  console.log(response.data)
  return response.data
}
