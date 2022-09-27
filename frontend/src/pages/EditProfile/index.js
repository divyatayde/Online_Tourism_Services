import './index.css'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { URL } from '../../config'
import { useNavigate,useLocation } from 'react-router-dom'

const EditProfile = () => {

  const location = useLocation();
  const userid = sessionStorage["userId"]
  const [user,setUser] = useState({})

  const fetchUserDetails = () => {
    const url = `http://localhost:7070/user/getuser/` + userid
    
    axios.get(url).then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          
            setUser(result['data'])
            console.log(user)
            console.log("inside get user")
        } else {
            console.log(result['error'])
        }
    })
}

  const [userId,setUserId] = useState(user.userId);
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
 // const [dob, setDOB] = useState(user.dob)
  const [mobile, setMobile] = useState(user.mobile)
 // const [gender, setGender] = useState(user.gender)
 // const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
 // const [confirmPassword, setConfirmPassword] = useState(user.password)
  const [address, setAddress] = useState(user.address)
 // const [isHost, setIsHost] = useState(false)
 // const [idProofNo, setIdProofNo] = useState(user.idProofNo)
 // const [idProofImg, setIdProofImg] = useState(user.idProofImg)
 // const [profilePic, setProfilePic] = useState('Profile Img')
 // const [userStatus, setUserStatus] = useState(user.userStatus)
 // const [role,setRole] = useState("customer")


  const editUser = () => {
    // if (firstName.length == 0) {
    //   toast.warning('Please enter first name')
    // } else if (lastName.length == 0) {
    //   toast.warning('Please enter last name')

    // } else if (mobile.length != 0) {
    //   toast.warning('Please enter the 10 digit mobile number')
    // } else if (email.length == 0) {
    //   toast.warning('Please enter email')
    // } else if (password.length == 0) {
    //   toast.warning('Please enter password')
    // }  
    {
      const body = {
        userId,
        firstName,
        lastName,
       // dob,
        mobile,
       // gender,
       // email,
        password,
        address,
        // isHost,
        // idProofNo,
        // idProofImg,
        // profilePic,
        // userStatus,
        // role
      }
      console.log("inside update user")
      console.log(userId)
      const url = `http://localhost:7070/user/`+ userId
      
       axios.put(url, body).then(response => {
        const result = response.data

        if (result['status'] == 'success') {
          toast.success('Profile Edited Successfully !')
        } else {
          toast.error(result['Error'])
        }
      })
    }
  }

  useEffect(() => {
    fetchUserDetails()
    }, [])
  return (
    <div className="form">
      <h1 className="title">Edit Profile</h1>

      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">

        <div className="mb-3">
            <label htmlFor="" className="label-control">
              User ID
            </label>
            <input type="text" className="form-control" onChange={(e) => {
                setUserId(e.target.value)
              }}placeholder={user.userId}  />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              First Name
            </label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              type="text"
              className="form-control" placeholder={user.firstName}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              Last Name
            </label>
            <input
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              type="text"
              className="form-control" placeholder={user.lastName}
            />
          </div>

          {/* <div className="mb-3">
            <label htmlFor="" className="label-control">
              DOB
            </label>
            <input
              onChange={(e) => {
                setDOB(e.target.value)
              }}
              type="date"
              className="form-control"
               
            />
          </div> */}

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              Mobile
            </label>
            <input
              onChange={(e) => {
                setMobile(e.target.value)
              }}
              type="number"
              className="form-control" placeholder={user.mobile}
            />
          </div>

          {/* <div className="radio-buttons">
            <label htmlFor="" className="label-control">
              Gender
            </label>
            <br />
            Male
            <input
              id="Male"
              value="Male"
              name="Gender"
              type="radio"
              onChange={(e) => {
                setGender(e.target.value)
              }}
            />
            Female
            <input
              id="Female"
              value="Female"
              name="Gender"
              type="radio"
              onChange={(e) => {
                setGender(e.target.value)
              }}
            />
            Other
            <input
              id="Other"
              value="Other"
              name="Gender"
              type="radio"
              onChange={(e) => {
                setGender(e.target.value)
              }}
            />
          </div> */}
          <br></br>




          {/* <div className="mb-3">
            <label htmlFor="" className="label-control">
              Email Address
            </label>
            <input type="text" className="form-control" placeholder={user.email} disabled/>
          </div> */}

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password"
              className="form-control"
            />
          </div>

          {/* <div className="mb-3">
            <label htmlFor="" className="label-control">
              Confirm Password
            </label>
            <input
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
              type="password"
              className="form-control"
            />
          </div> */}

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              Address
            </label>
            <input
              onChange={(e) => {
                setAddress(e.target.value) 
              }}
              type="text"
              className="form-control" placeholder={user.address}
            />
          </div>
{/* 
          <div className="mb-3">
          <input onClick={(e) => {
              setIsHost(!isHost)
            }} type="checkBox" id="host" name="is_host"/>
            <label htmlFor="" className="label-control"> isHost </label> 
          </div>

          <div className="mb-3">
            <label htmlFor="" className="label-control">
              id_proof_no
            </label>
            <input type="number" className="form-control" placeholder={user.idProofNo} disabled/>
          </div> */}

          {/* <div className="mb-3">
            <label htmlFor="" className="label-control">
              profile_pic
            </label>
            <input
              onChange={(e) => {
                setProfilePic(e.target.value)
              }}
              id="image"
              type="file"
              className="form-control"
            />
          </div> */}

          <div className="mb-3">

            <button onClick={editUser} className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>

  );
}

export default EditProfile