import './index.css'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Profile = () => {

    const userid = sessionStorage["userId"]
    const [user, setUser] = useState({})

    const getUserDetails = () => {
        const url = `http://localhost:7070/user/getuser/` + userid
        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setUser(result['data'])
            } else {
                console.log(result['error'])
            }
        })
    }

    const logoutUser = () =>{
        sessionStorage.removeItem("userId")
        sessionStorage.removeItem("isHost")
        sessionStorage.removeItem("firstName")
        sessionStorage.removeItem("lastName")
        sessionStorage.removeItem("role")

        navigate("/signin")
       
    }

    useEffect(() => {
        getUserDetails()
    }, [])



    const navigate = useNavigate()
    return (
        <div>
            <div className="my-4">
                <div className="btn btn-danger btn-sm float-end " onClick={logoutUser}>Logout</div>
                <div className="page">



                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "18px 0px",
                        border: "black"
                    }}>
                        <img style={{ width: "300px", height: "300px", borderRadius: "150px" }}
                            src="https://images.unsplash.com/photo-1516685304081-de7947d419d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsbGluZyUyMGJhY2twYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>

                    <div>
                        <h4>{user.firstName} {user.lastName}</h4>
                    </div>

                    <div style={{ marginLeft: "30px" }}>
                        <b>Email</b> : {user.email}
                    </div>

                    <div style={{ marginLeft: "30px" }}>
                        <b>Mobile</b> : {user.mobile}
                    </div>

                    <div style={{ marginLeft: "30px" }}>
                        <b>Date of Birth</b> : {user.dob}
                    </div>

                    <div style={{ marginLeft: "30px" }}>
                        <b>Gender</b> : {user.gender}
                    </div>

                    <div style={{ marginLeft: "30px" }}>
                        <b>User status</b> : {user.userStatus}
                    </div>

                    <div style={{ marginLeft: "30px" }}>
                        <b>Role</b> : {user.role}
                    </div>

                    {user.isHost && user.isHost==true && (<div style={{ marginLeft: "30px" }}>
                        <b>User isHost</b> : Yes
                    </div>)}

                    {user.isHost && user.isHost==false && (<div style={{ marginLeft: "30px" }}>
                        <b>User isHost</b> : No
                    </div>)}

                    <div style={{ marginLeft: "30px" }}>
                        <b>Address</b> : {user.address}
                    </div>

                    <div style={{ marginLeft: "30px" }}>
                        <b>Id Proof Number</b> : {user.idProofNo}
                    </div>


                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button
                            onClick={() => {
                                navigate('/userbookings')
                            }}
                            type="button" class="btn btn-info btn-sm"
                            style={{ width: "200px", margin: "25px" }}>
                            My Bookings
                        </button>
                        
                        {sessionStorage["role"] && (sessionStorage["role"] == "admin") && (<button
                            onClick={() => {
                                navigate('/addpackage')
                            }}
                            type="button" class="btn btn-info btn-sm"
                            style={{ width: "200px", margin: "25px" }}>
                             Add Package
                        </button>)}




                        {/* <button
                            onClick={() => {
                                navigate('/requestlist')
                            }}
                            type="button" class="btn btn-info btn-sm"
                            style={{ width: "200px", margin: "25px" }}>
                            My Requests
                        </button> */}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button
                            onClick={() => {
                                navigate('/editprofile',{ state:{ userid:userid}})
                            }}
                            type="button" class="btn btn-info btn-sm"
                            style={{ width: "200px", margin: "25px" }}>
                            Edit Profile
                        </button>
                        {sessionStorage["role"] && (sessionStorage["role"] == "admin") && (<button
                            onClick={() => {
                                navigate('/mypackagelist')
                            }}
                            type="button" class="btn btn-info btn-sm"
                            style={{ width: "200px", margin: "25px" }}>
                            My Packages
                        </button>)}

                    </div>
                    {/* <div className="row">
                    {sessionStorage["role"] && (sessionStorage["role"] == "admin") && (<button
                            onClick={() => {
                                navigate('/addpackage')
                            }}
                            type="button" class=" px-5 btn btn-info btn-sm"
                            style={{ width: "200px", margin: "25px" }}>
                            Add Package
                        </button>)}
                    </div> */}
                    <div>
                        {sessionStorage["role"] && (sessionStorage["role"] == "admin") && (<button
                            onClick={() => {
                                navigate('/userlist')
                            }}
                            type="button" class=" px-5 btn btn-info btn-sm"
                            style={{ width: "200px", margin: "25px" }}>
                            User List
                        </button>)}
                    </div>

                    <ToastContainer />
                </div>
            </div>
        </div>

    )
}


export default Profile