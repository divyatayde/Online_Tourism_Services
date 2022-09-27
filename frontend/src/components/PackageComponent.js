import packageImage from '../assets/samPackage.jpg';
import './PackageComponent.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const PackageComponent = (props) => {

  const navigate = useNavigate();
  const packageid = props.packages.packageId;
  const rating = props.packages.rating;
  const Name = props.packages.packageName;
  const Address = props.packages.city + ", " + props.packages.state + ", " + props.packages.country;
  const Price = props.packages.price;
  const isAvailable = props.packages.isAvailable
 
  const getPackageRating = () => {
    const url = `http://localhost:7070/ratings/avgratings/` + packageid
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        //setRating(Math.round(result['data']))
      } else {
        console.log(result['error'])
      }
    })
  }

  const sendRequest = () => {

    const body = {
      requestId:0,
      senderId: sessionStorage["userId"],
      receiverId: props.hotel.ownerId,
      fromDate: sessionStorage["fromDate"],
      toDate: sessionStorage["toDate"],
      requestStatus: "pending",
      //homestayName: Name,
    }
    if ((sessionStorage["userId"]!=null) ) {
      const url2 = `http://localhost:7070/requests/add`
      axios.post(url2, body).then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          //setRating(Math.round(result['data']))
          toast.success("Request Sent Successfully")
          toast.success("You Can See requestStatus From Profile")
        } else {
          console.log(result['error'])
        }
      })

    } else {
      toast.warning("Please signin first")

    }

    //navigate("/home",{},5000)
  }

  // load the data in the beginning
  useEffect(() => {
    const timer = setTimeout(() => console.log('Initial timeout!'), 3000);
    clearTimeout(timer);
    console.log('getting called')
  }, [])



  return (
    <div className="hoteldiv col-md-3">
      <div onClick={() => { navigate("/packagedetails", { state: { packageid, rating } }) }
      } >
        <img src={packageImage} id="hotelImage" />
        <div className="title mx-2 my-2"><h2>{Name}</h2></div>
        <div className="address mx-2 my-2"><MdLocationOn size={20} /> {Address}</div>
        <div className="rating mx-2 my-2">
          {[...Array(rating)].map(star => {
            return <AiFillStar size={20} />
          })}
          {[...Array(5 - rating)].map(star => {
            return <AiOutlineStar size={20} />
          })}
        </div>
        
      </div>
      <div>{isAvailable == true && (<div><div className="address">click below button to send request</div>
        <div className="btn btn-primary btn-sm float-end" onClick={sendRequest}>Send Request</div></div>)}</div>
      <ToastContainer />
    </div>










  )
}

export default PackageComponent