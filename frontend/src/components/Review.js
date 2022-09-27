import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Review = (props) => {

  const reviewid = props.review.reviewId
  const userid = props.review.userId;
  const data = props.review.review;
  const [userName, setUserName] = useState('')
  console.log(userid)

  const getUserName = () => {
    const url = `http://localhost:7070/user/getusername/` + userid
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setUserName(result['data'])
        console.log(userName)
      } else {
        console.log(result['error'])
      }
    })
  }

  const deleteReview = () => {
    const url = `http://localhost:7070/reviews/delete/` + reviewid
    axios.delete(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        console.log(result['data'])
        toast.success("Review deleted successfully!")
        toast.success("Please click on show reviews button")
      } else {
        console.log(result['error'])
      }
    })
  }

  // load the data in the beginning
  useEffect(() => {
    getUserName()
  }, [])

  return (
    <div className="row border rounded-pill border-info mx-3 my-3 px-4 py-2">
      <div className="col-6">
        <div style={{ color: "gray", fontSize: "0.8em" }}>{userName}</div>
        <div>{data}</div>
      </div>
      <div className="col-6">
        {
          sessionStorage['userId'] && sessionStorage['userId'] == userid && (
            <div>
              <button onClick={deleteReview} className="btn btn-outline-danger btn-sm mx-3 mt-1 float-end">Delete</button>
            </div>
          )
        }
      </div>

      
    </div>
  );
}

export default Review