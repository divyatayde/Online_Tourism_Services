import { useState,useEffect} from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { useLocation } from "react-router"

const PackageBookingList = () => {

 const [resultData,setResultData] = useState([]);
 const location = useLocation()
 const packageid = location.state.packageid;


  const getBookingByPackageId = () => {
    const url = `http://localhost:7070/bookings/getallbypackageid/` + packageid
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
    getBookingByPackageId()
  }, [])




  const tableRows = resultData.map((info) => {
    return (
      <tr>
        <td>{info.userName}</td>
        <td>{info.packageName}</td>
        <td>{info.from_date}</td>
        <td>{info.to_date}</td>
        <td>{info.members_count}</td>
        <td>{info.total_amount}</td>
        <td>{info.payment_status}</td>  
      </tr>
    );
  });

  return (
    <div>
      <h1>Booking List Package</h1>

      <div>
        <br></br>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Package Name</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Total Members</th>
              <th>Total Amount</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        {/* <StudentForm func={addRows} /> */}
      </div>
    </div>
  )
}

export default PackageBookingList