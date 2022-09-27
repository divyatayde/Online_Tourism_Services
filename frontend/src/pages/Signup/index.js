import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'


const Signup = () => {

  const [userId,setUserID] = useState("0")  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDOB] = useState('')
  const [mobile, setMobile] = useState()
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [isHost, setIsHost] = useState(false)
  const [idProofNo, setIdProofNo] = useState('')
  const [idProofImg, setIdProofImg] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const [userStatus,setUserStatus] = useState('verified')
  const [role,setRole] = useState('customer')

  // used to navigate from one component to another
  const navigate = useNavigate()

  const signupUser = () => {

    console.log("inside signup user")
    console.log(isHost)
    console.log(profilePic)
    console.log(password)
    console.log(firstName)



    if (firstName.length == 0) {
      toast.warning('Please enter first name')
      
    } else if (lastName.length == 0) {
      toast.warning('Please enter last name')
    
    } else if (mobile.length == 0) {
      toast.warning('Please enter the 10 digit mobile number')
    } else if (email.length == 0) {
      toast.warning('Please enter email')
    } else if (password.length == 0) {
      toast.warning('Please enter password')
    } else if (confirmPassword.length == 0) {
      toast.warning('Please confirm your password')
    } else if (password != confirmPassword) {
      toast.warning('Password does not match')
    } else {
        
      const body = {
            userId:userId,
            firstName,
            lastName,
            dob,
            mobile,
            gender,
            email, 
            password,
            address, 
            isHost,
            idProofNo,
            idProofImg,
            profilePic,
            userStatus,
            role,
      }
      console.log(body)
      // url to call the api
      const url = `http://localhost:7070/user/adduser`

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data
        console.log(result['data'])
        if (result['status'] == 'success') {
          toast.success('Successfully signed up new user')

          // navigate to the signin page
          navigate('/signin')
        } else {
          toast.error(result['error'])
        }
      })
    }
  }

  return (
    <div>
      <h1 className="title my-5">Signup</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                First Name
              </label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                type="text"
                className="form-control"
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
                className="form-control"
              />
            </div>

            <div className="mb-3">
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
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Mobile
              </label>
              <input
                onChange={(e) => {
                  setMobile(e.target.value)
                }}
                type="number"
                className="form-control"
              />
            </div>

            <div className="radio-buttons">
            <label htmlFor="" className="label-control">
                Gender
              </label>
              <br/>
        Male
        <input
          id="Male"
          value="Male"
          name="Gender"
          type="radio"
          onClick={(e) => {
            setGender(e.target.value)
          }}
        />
        Female
        <input
          id="Female"
          value="Female"
          name="Gender"
          type="radio"
          onClick={(e) => {
            setGender(e.target.value)
          }}
        />
        Other
        <input
          id="Other"
          value="Other"
          name="Gender"
          type="radio"
          onClick={(e) => {
            setGender(e.target.value)
          }}
          />
          </div>
          <br></br>
           

            

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email Address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

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

            <div className="mb-3">
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
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Address
              </label>
               <input
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                is_host:
              </label>
              <br/>
              <input onChange={(e) => {
                  setIsHost(!isHost)
                }} type="radio" name="is_host" />host
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
              id_proof_no
              </label>
              <input
                onChange={(e) => {
                  setIdProofNo(e.target.value)
                }}
                type="number"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
              id_proof_img
              </label>
              <input
                onChange={(e) => {
                  setIdProofImg("e.target.value")
                }}
                id="image"
                type="file"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
              profile_pic
              </label>
              <input
                onChange={(e) => {
                  setProfilePic("e.target.value")
                }}
                id = "image"
                type="file"
                className="form-control"
              />
            </div> 

            <div className="mb-3">
              <div>
                Already have an account? <Link to="/signin">Signin here.</Link>
              </div>
              <button onClick={signupUser} className="btn btn-primary">
                Signup
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Signup
