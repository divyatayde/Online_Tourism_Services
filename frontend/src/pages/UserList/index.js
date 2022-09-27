import { useState,useEffect} from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { useLocation } from "react-router"

const UserList = () => {

 const [resultData,setResultData] = useState([]);
 const location = useLocation()
 const userid = sessionStorage["userId"]


  const getAllUser = () => {
    const url = `http://localhost:7070/user/getall` 
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setResultData(result['data'])

      } else {
        console.log(result['error'])
      }
    })

  }

  useEffect(() => {
    getAllUser()
  }, [])




  const tableRows = resultData.map((info) => {
    return (
      <tr>
      <td>{info.userId}</td>
        <td>{info.firstName}</td>
        <td>{info.lastName}</td>
        <td>{info.dob}</td>
        <td>{info.mobile}</td>
        <td>{info.gender}</td>
        
        
      </tr>
    );
  });

  return (
    <div>
      <h1>User List :</h1>

      <div>
        <br></br>
        <table className="table table-stripped">
          <thead>
            <tr>
            <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Mobile </th>
              <th>Gender</th>
              
              
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        {/* <StudentForm func={addRows} /> */}
      </div>
    </div>
  )
}

export default UserList