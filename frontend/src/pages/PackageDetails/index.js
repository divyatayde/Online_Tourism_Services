
import himg1 from "../../assets/sampHotel2.jpg"
import './index.css'
import { useNavigate, useLocation, Navigate } from "react-router"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { RiHotelLine } from 'react-icons/ri'
import { MdLocationOn } from 'react-icons/md'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Review from '../../components/Review'
import { toast, ToastContainer } from 'react-toastify'


const PackageDetails = () => {


    const location = useLocation();
    const navigate = useNavigate();
    const packageid = location.state.packageid
    const rating = location.state.rating
    const [packages, setPackages] = useState({})
    const price = packages.price;
    const packageName = packages.packageName;



    const [reviews, setReviews] = useState([])
    const [reviewData, setReviewData] = useState('')

    const getPackageDetails = () => {
        const url = `http://localhost:7070/packages/getpackage/` + packageid
        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setPackages(result['data'])
           
            } else {
                console.log(result['error'])
            }
        })
    }

    const getReviews = () => {
        console.log(packageid)
        const url = `http://localhost:7070/reviews/package/` + packageid
        console.log("inside")
        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setReviews(result['data'])
            } else {
                
                console.log(result['error'])
            }
        })
    }

    const addReview = () => {
        const url = `http://localhost:7070/reviews/addreview`
        const body = {
            reviewId: "0",
            userId: sessionStorage['userId'],
            packageId: packageid,
            review: reviewData,

        }
        axios.post(url, body).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                console.log("review added successfully")
                getReviews();
            } else {
                
                console.log(result['error'])
            }
        })

    }

    const seePackageBookings = () => {
        if(sessionStorage["userId"] != null)
        {
            navigate("/packagebookings",{ state:{packageid,packageName}})
        }
    }

    const addBooking = () => {
        if(sessionStorage["userId"] != null)
        {
            navigate("/bookings",{ state:{packageid,packageName,price}})
        }
        else
        {
            toast.warning("Please Sign in First")
            navigate("/signin")
        }
    }

    useEffect(() => {
        getPackageDetails()
    }, [])


  
    return (
        <div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="outer-div">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <div>
                                    {
                                        <div className="justify-content">
                                            

                                             <div onClick={seePackageBookings} className="btn btn-primary btn-sm my-2 mx-2 float-end">See Bookings</div>
                                        </div>
                                        
                                    }
                                </div>
                                <img src={himg1} id="hotel-images" />
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="" id="title"><b><h5> <RiHotelLine size={25} /> {packages.packageName}</h5></b></div>
                        <div className="" id="address"><MdLocationOn size={20} /> {packages.area}, {packages.city}, {packages.state}</div>
                        <div className="" id="rating">
                            {[...Array(rating)].map(star => {
                                return <AiFillStar size={20} />
                            })}
                            {[...Array(5 - rating)].map(star => {
                                return <AiOutlineStar size={20} />
                            })}
                        </div>
                       
                        <div className="mx-3 my-3 btn btn-primary" onClick={getReviews}>Show Reviews</div>
                        <div className="mx-3 my-3 btn btn-primary" onClick={addBooking} >Book Package</div>

                        <div className=" mx-3 my-3">
                            {reviews.map((review) => {
                                return <Review review={review} />
                            })}
                        </div>
                        <div>
                            {
                               (
                                    <div className="mx-5 my-3">
                                        <div>
                                            <lable for="reviewData" className="label-control1 my-3">Enter Your Review</lable>
                                            <input type="text" onChange={(e) => { setReviewData(e.target.value) }} id="reviewData" className="form-control" />
                                        </div>
                                        <div onClick={addReview} className="btn btn-success my-2">Submit</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default PackageDetails
