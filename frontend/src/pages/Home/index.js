import welcomeImage from '../../assets/Travel7.jpg';
import './index.css'
import 'react-toastify/dist/ReactToastify.min.css';
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Home = () => {

    const [city, setCity] = useState('')
    
    
    // used to navigate from one component to another
    const navigate = useNavigate()

    const submitSearch = () => {
        console.log("inside submit search method")
        if (city.length == 0) {
            toast.warning('Please Enter city')
        
         }// else if (packageType != true && packageType != false) {
        //     toast.warning('Please Select HotelType')
        // 
         else {

            console.log(city);
            sessionStorage.setItem("city", city);
           // url to call the api
            

            navigate('/packagelist', {
                state: {
                    city,
                   
                }
            })
        }
    }

    return (
        <div>
            <div className='row'>
                <div className=" text-center wel-image">
                    <div className="weltextMain">Welcome to Holiday Planner's</div>
                    <div className="weltextSub">Indias Best Holiday Planning Website</div>
                </div>
            </div>

            <div className="row form_block">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    <form>
                        <div className="row my-2">
                            <div className="col">
                                <div className="form-floating">
                                    <input onChange={(e) => {
                                        setCity(e.target.value)
                                    }} type="text" id="floatingInputGrid" className="form-control " placeholder="ex. Pune"/>
                                    <label for="floatingInputGrid">City</label>
                                </div>
                            </div>
                        </div>

                      

                       

                       
                        <div className="form-row my-2">
                            <div className="form-group col">
                                <input type="button" onClick={submitSearch} className="btn btn-primary w-100" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3">

                </div>
            </div>
            <ToastContainer />

        </div>
    );
}

export default Home;