import axios from 'axios'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PackageComponent from '../../components/PackageComponent'

const PackageList = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    console.log("inside package list")
    console.log(location.state)
    const body = {
        city: location.state.city,
        packageType: location.state.packageType
    }

    const [packages, setPackages] = useState([])
    const [sortType, setSortType] = useState("");
    const city= sessionStorage.getItem("city");


    // make a call to the search api to get the results
    const searchPackages = () => {
      console.log("my city"+city)
      const url = `http://localhost:7070/packages/getbycity/`+city
      axios.get(url).then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          setPackages(result['data'])
          console.log("my data"+packages)
        } else {
          console.log("error messsage")
          console.log(result['error'])
        }
      })
      .catch(
        console.log("inside catch")
      )
    }

    useEffect(() => {
      searchPackages()
      console.log('getting called')
    }, [])
    const tableRows = packages.map((info) => {
      return (
        <tr>
          <td>{info.area}</td>
          <td>{info.city}</td>
          <td>{info.price}</td>
          <td>{info.country}</td>
          <td>{info.packageName}</td>
          <td>{info.state}</td>
         
        </tr>
      );
    });
     
    const sortPackageByPrice = () =>{
      setSortType("price")
      setPackages((packages) => [...packages.sort( compare )]);
      
    }

    const sortPackageByRating = () =>{
      setSortType("rating")
      setPackages((packages) => [...packages.sort( compare )]);
      
    }
    
    
    function compare( a, b ) {
      if(sortType == "price")
      {
        if ( a.price < b.price ){
          return -1;
        }
        if ( a.price > b.price ){
          return 1;
        }
        return 0;
      }
      else
      {
        if ( a.rating < b.rating ){
          return -1;
        }
        if ( a.rating > b.rating ){
          return 1;
        }
        return 0;

      }
      
    }
    return (
      <div>
        <h1> List of Package</h1>
  
        <div>
          <br></br>
          <table className="table table-stripped">
            <thead>
              <tr>
                <th>Area</th>
                <th>City</th>
                <th>Price</th>
                <th>Country</th>
                
                <th>Package Name</th>
                <th>State</th>
               
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
          {/* <StudentForm func={addRows} /> */}
        </div>
         <div>
            <div className="btn mx-2 mt-3 btn-primary" onClick={sortPackageByPrice}>SortByPrice</div>
            <div className="btn mx-2 mt-3 btn-primary" onClick={sortPackageByRating}>SortByRating</div>


            <div className="row">
                <div className="row">
                    {packages.map((packages) => {
                        console.log(packages)
                        return <PackageComponent packages={packages} />
                    })}
                </div>
            </div>
        </div>
      </div>
    )
    const showPackageDetails = () =>{
       navigate("/packagedetails")
    }
    
    console.log(packages)
   // return (

  //     <div>
  //     <div className="btn mx-2 mt-3 btn-primary" onClick={sortPackageByPrice}>SortByPrice</div>
  //     <div className="btn mx-2 mt-3 btn-primary" onClick={sortPackageByRating}>SortByRating</div>


  //     <div className="row">
  //         <div className="row">
  //             {packages.map((packages) => {
  //                 console.log(packages)
  //                 return <PackageComponent packages={packages} />
  //             })}
  //         </div>
  //     </div>
  // </div> 
  //   );


    // const sortPackageByPrice = () =>{
    //   setSortType("price")
    //   setPackages((packages) => [...packages.sort( compare )]);
      
    // }

    // const sortPackageByRating = () =>{
    //   setSortType("rating")
    //   setPackages((packages) => [...packages.sort( compare )]);
      
    // }
    
    
    // function compare( a, b ) {
    //   if(sortType == "price")
    //   {
    //     if ( a.price < b.price ){
    //       return -1;
    //     }
    //     if ( a.price > b.price ){
    //       return 1;
    //     }
    //     return 0;
    //   }
    //   else
    //   {
    //     if ( a.rating < b.rating ){
    //       return -1;
    //     }
    //     if ( a.rating > b.rating ){
    //       return 1;
    //     }
    //     return 0;

    //   }
      
    // }

    // load the data in the beginning
//     useEffect(() => {
//       searchPackages()
//       console.log('getting called')
//     }, [])
//     const tableRows = packages.map((info) => {
//       return (
//         <tr>
//           <td>{info.area}</td>
//           <td>{info.city}</td>
//           <td>{info.price}</td>
//           <td>{info.country}</td>
//           <td>{info.package_name}</td>
//           <td>{info.place_img}</td>
         
//         </tr>
//       );
//     });
     
//     return (
//       <div>
//         <h1> List of Package</h1>
  
//         <div>
//           <br></br>
//           <table className="table table-stripped">
//             <thead>
//               <tr>
//                 <th>Area</th>
//                 <th>City</th>
//                 <th>Price</th>
//                 <th>To Date</th>
//                 <th>Country</th>
//                 <th>Package Name</th>
//                 <th>Image</th>
//               </tr>
//             </thead>
//             <tbody>{tableRows}</tbody>
//           </table>
//           {/* <StudentForm func={addRows} /> */}
//         </div>
//       </div>
//     )
//     const showPackageDetails = () =>{
//        navigate("/packagedetails",)
//     }
    
//     console.log(packages)
//     return (

//         <div>
//             <div className="btn mx-2 mt-3 btn-primary" onClick={sortPackageByPrice}>SortByPrice</div>
//             <div className="btn mx-2 mt-3 btn-primary" onClick={sortPackageByRating}>SortByRating</div>


//             <div className="row">
//                 <div className="row">
//                     {packages.map((packages) => {
//                         console.log(packages)
//                         return <PackageComponent packages={packages} />
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
 }

export default PackageList;