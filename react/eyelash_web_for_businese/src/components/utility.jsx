import { getToken } from "./csrftoken"


export const AddEmployee = async () =>{
  getToken()
  const response = await axios.post(`/employee/`)
  console.log(response.data)
  return response.data
}
