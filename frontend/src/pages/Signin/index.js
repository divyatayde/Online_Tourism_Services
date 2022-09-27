import { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router'


const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning("please enter email")
    } else if (password.length == 0) {
      toast.warning("please enter password")
    } else {
      const body = {
        email,
        password,
      }

      const url = `http://localhost:7070/user/signin`
      axios.post(url,body).then((response) => {

        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          const { userId, firstName,lastName,isHost, role,userStatus } = result['data']
          toast.success('Welcome ' + firstName)
          //Session storage
          console.log(userStatus)
          if(userStatus == "verified")
          {
            
            sessionStorage['userId'] = userId
            sessionStorage['firstName'] = firstName
            sessionStorage['lastName'] = lastName
            sessionStorage['isHost'] = isHost
            sessionStorage['role'] = role
            navigate('/home')
          }
          else
          {
            toast.error("Sorry ,you Can't Login as you are not verified yet")
          }
   
        } 
        else 
        {
          toast.error("Invalid user name or password")
          
        }
      })
    }
  }
  return (

    <div>
      <div className="row my-4">
        <h2 align="center">Signin</h2>
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>
            <div>
              No account yet? <Link to="/signup">Signup here</Link>
            </div>
            <div className="mb-3">
              <button onClick={signinUser} className="btn btn-primary">
                Signin
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
export default Signin
