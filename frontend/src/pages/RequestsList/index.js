import { useState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import axios from "axios"
import { useLocation } from "react-router"
const RequestList = () => {

  const [resultData, setResultData] = useState([]);
  const [resultData2, setResultData2] = useState([]);
  const [body, setBody] = useState({})
  const [rid, setRid] = useState();
  const [no,setNo]  = useState(0);
  const [reqStatus,setReqStatus] = useState("pending")
  const [reqStatus2,setReqStatus2] = useState("pending")

  const location = useLocation()
  const userid = sessionStorage["userId"]
  const getRquestBySenderId = () => {
    const url = `http://localhost:7070/requests/getRequestBySenderId/` + userid
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setResultData(result['data'])

      } else {
        console.log(result['error'])
      }
    })

  }

  const getRquestByReceiverId = () => {
    const url = `http://localhost:7070/requests/findAllByReceiverId/` + userid
    axios.get(url).then((response) => {
      const result = response.data
      console.log(result)
      if (result['status'] == 'success') {
        setResultData2(result['data'])


      } else {
        console.log(result['error'])
      }
    })

  }




  useEffect(() => {
    getRquestBySenderId()
    getRquestByReceiverId()
  }, [])



  console.log(resultData)
  
  const tableRows = resultData?.map((info) => {
    return (
      <tr>
        <td>{info.senderId}</td>
        <td>{info.receiverId}</td>
        {/* <td>{info.Name}</td> */}
        <td>{info.from_date}</td>
        <td>{info.to_date}</td>
        <td>{info.requestStatus}</td>
      </tr>
    );
  });
  
  const setRequestAccepted = (props) =>{
    setReqStatus("Accepted");
  }

  const setRequestDeclined = () =>{

    setReqStatus("Declined");
  } 

  const setRequestAccepted2 = (props) =>{
    setReqStatus2("Accepted");
  }

  const setRequestDeclined2 = () =>{

    setReqStatus2("Declined");
  } 
  const tableRows2 = resultData2?.map((info) => {
  
    return (<tr>
      <td>{info.senderId}</td>
        <td>{info.receiverId}</td>
        {/* <td>{info.Name}</td> */}
        <td>{info.from_date}</td>
        <td>{info.to_date}</td>
        <td>{info.requestStatus}</td>
      {(info.requestId < 2) && (<td>{reqStatus}</td>) }
      {(info.requestId == 2) && (<td>{reqStatus2}</td>) }
      {(info.requestId > 2) && (<td>{info.requestStatus}</td>)}
      {(info.requestId == 2) && (<td ><div className="btn btn-primary btn-sm" onClick={setRequestAccepted2}>Accept</div></td>)}
      {(info.requestId == 2) && (<td><div className="btn btn-danger btn-sm" onClick={setRequestDeclined2}>Decline</div></td>)}
      {(info.requestId != 2) && (<td ><div className="btn btn-primary btn-sm" onClick={setRequestAccepted}>Accept</div></td>)}
      {(info.requestId != 2) && (<td><div className="btn btn-danger btn-sm" onClick={setRequestDeclined}>Decline</div></td>)}

    </tr>);
  });

  return (
    <div>
      <h1>Request List</h1>

      <div>
        <br></br>
        <div ><h3>Sent Requests :</h3></div>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>sender id</th>
              <th>receiver id</th>
              {/* <th> Name</th> */}
              <th>From Date</th>
              <th>To Date</th>
              <th>Request Status</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        {/* <StudentForm func={addRows} /> */}
      </div>

      <div>
        <br></br>
        <h3>Received Requests :</h3>
        <table className="table table-stripped">
          <thead>
            <tr>
              
              <th>Sender id</th>
              <th> Receiver id</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Request Status</th>
              {/* <th>Accept Request</th>
              <th>Declined Request</th> */}
            </tr>
          </thead>
          <tbody>{tableRows2}</tbody>
        </table>
        {/* <StudentForm func={addRows} /> */}
      </div>
        < ToastContainer />
    </div>
  )
}

export default RequestList