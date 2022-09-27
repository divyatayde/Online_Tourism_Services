// import './index.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import { URL } from '../../config'
import './index.css'
import { BiTargetLock } from 'react-icons/bi'



const Bookings = () => {
    const [price, setPrice] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    const [total_amount, setTotalAmount] = useState()
    const [payment_status, setPaymentStatus] = useState('pending')
    const [package_id, setPackageId] = useState()
    const [packageName, setPackageName] = useState('')
    const [user_id, setUserId] = useState()
    const [to_date, setToDate] = useState()
    const [from_date, setFromDate] = useState()
    const [userName, setUserName] = useState('')
    const [members_count, setMembersCount] = useState(3)
    
  
    const getBookingData = () => {
        setPrice(location.state.price)
        setPaymentStatus('pending')
        setPackageId(location.state.package_id)
        setPackageName(location.state.packageName)
        setUserId(sessionStorage["userId"])
        setFromDate(sessionStorage["fromDate"])
        setToDate(sessionStorage["toDate"])
        setUserName(sessionStorage["firstName"]+sessionStorage["lastName"])
        setMembersCount(sessionStorage["memberCount"])
        setTotalAmount(location.state.price)
    }

    useEffect(() => {
        getBookingData()
        console.log(' get booking Data getting called')
    }, [])




    const confirmBookings = () => {
        // if (from_date.length == 0) {
        //     toast.warning('Please enter date')
        // } else if (to_date.length == 0) {
        //     toast.warning('Please enter date')


        // } else 
        {
            const body = {
                id : 0,
                from_date,
                to_date,
                members_count,
                total_amount,
                payment_status,
                package_id,
                user_id,
                
                

            }
            console.log(body)
            // url to call the api
            const url = `http://localhost:7070/bookings/`

            // http method: post
            // body: contains the data to be sent to the API
            axios.post(url, body).then((response) => {
                // get the data from the response
                const result = response.data
                console.log(result)
                if (result['status'] == 'success') {
                    toast.success('booking completed successfully')
                    navigate("/profile")
                    // navigate to the signin page

                } else {
                    toast.error(result['error'])
                }
            })
        }
    }

    const current = new Date();
    //const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;
    const date = "2022-09-24"
    return (
        <div>
            <h2 align="center">Booking</h2>
            <div className="row">
                <div className="row">
                    <div className="col-6 my-2">
                        <div className="fieldName"> Name</div>
                    </div>
                    <div className="col-6 my-2">
                        <div className="fieldValue">{userName}</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 my-2">
                        <div className="fieldName">Package Name</div>
                    </div>
                    <div className="col-6 my-2">
                        <div className="fieldValue">{packageName}</div>
                    </div>
                </div>

                { <div className="row">
                    <div className="col-6 my-2">
                        <div className="fieldName">From Date</div>
                    </div>
                    <div className="col-6 my-2">
                        <div className="fieldValue">{from_date}</div>
                    </div>
                </div> }

                { <div className="row">
                    <div className="col-6 my-2">
                        <div className="fieldName">To Date</div>
                    </div>
                    <div className="col-6 my-2">
                        <div className="fieldValue">{to_date}</div>
                    </div>
                </div> }

                {/* <div className="row">
                    <div className="col-6 my-2">
                        <div className="fieldName">Starting Date</div>
                    </div>
                    <div className="col-6 my-2">
                        <div className="fieldValue">{date}</div>
                    </div>
                </div> */}

                { <div className="row">
                    <div className="col-6 my-2">
                        <div className="fieldName">Member Count</div>
                    </div>
                    <div className="col-6 my-2">
                        <div className="fieldValue">{members_count }</div>
                    </div>
                </div> }

                <div className="row">
                    <div className="col-6 my-2">
                        <div className="fieldName">Package Price</div>
                    </div>
                    <div className="col-6 my-2">
                        <div className="fieldValue">{price}</div>
                    </div>
                </div>

                {/* { <div className="row">
                    <div className="col-6 my-2">
                        <div className="fieldName">No of bookings</div>
                    </div>
                   
                </div> } */}

                <div className="row">
                    <div className="col-6 my-2">
                        <div className="fieldName">Total Amount</div>
                    </div>
                    <div className="col-6 my-2">
                        <div className="fieldValue">{total_amount}</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 my-2">
                        <div className="fieldName">Payment Method</div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5 my-2">
                        <input  type="radio" name="paymentMethod" id="paymentMethod1" onClick={()=>{setPaymentStatus("pending")}} checked="true"/ ><lable for="paymentMethod1">Pay On The Spot</lable><br />
                        <input  type="radio" name="paymentMethod" id="paymentMethod2" onClick={()=>{setPaymentStatus("paid")}}/><lable for="paymentMethod2" /> Pay Online
                        </div>
                </div>

                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-4 btn btn-primary w-50 align-center" onClick={confirmBookings}>Confirm Booking</div>
                    <div className="col-5"></div>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default Bookings
