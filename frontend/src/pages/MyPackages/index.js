import axios from 'axios'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PackageComponent from '../../components/PackageComponent'

const MyPackageList = () => {

    const userId = sessionStorage["userId"]
    const [resultData, setResultData] = useState([])
    const navigate = useNavigate()
    // make a call to the search api to get the results
    const getpackages = () => {
      const url = `http://localhost:7070/packages/getpackages` 
      axios.get(url).then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          setResultData(result['data'])
        } else {
          console.log(result['error'])
        }
      })
    }


    // load the data in the beginning
    useEffect(() => {
      getpackages()
      console.log('getting called')
    }, [])
    const tableRows = resultData.map((info) => {
      return (
        <tr>
          <td>{info.country}</td>
          <td>{info.available}</td>
          <td>{info.city}</td>
          <td>{info.state}</td>
          <td>{info.packageName}</td>
          <td>{info.packageType}</td>
          <td>{info.price}</td>  
        </tr>
      );
    });
  
    return (
      <div>
        <h1> List Of Packages</h1>
  
        <div>
          <br></br>
          <table className="table table-stripped">
            <thead>
              <tr>
                <th>Country</th>
                <th>Availability</th>
                <th>City</th>
                <th>State</th>
                <th>Package Name</th>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
          {/* <StudentForm func={addRows} /> */}
        </div>
      </div>
    )

    const showPackageDetails = () =>{
       navigate("/packagedetails")
    }
    
    console.log(resultData)
    return (

        <div>
            <div className="row">
                <div className="row">
                    {((resultData) => {
                        console.log(resultData)
                        return <PackageComponent resultData={resultData} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default MyPackageList;