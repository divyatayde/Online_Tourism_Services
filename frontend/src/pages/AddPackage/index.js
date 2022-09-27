import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'

const AddPackage = () => {
    const [packages, setPackages] = useState()
    const [packageId, setPackageId] = useState("0")
    const [packageName, setPackageName] = useState('')
    const [isAvailable, setIsAvailable] = useState(true)
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [area, setArea] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [packageType, setPackageType] = useState('')
  
    const [placeImg, setPlaceImg] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()



    const addPackage = () => {

        console.log('Inside Signup package')
        console.log(packageName)
        console.log(city)
        console.log(state)
        console.log(country)
        console.log(area)
        console.log(pinCode)
        console.log(packageType)
        console.log(price)

        if (packageName.length === 0) {
            toast.warning('Please enter Package name')
        } else if (city.length === 0) {
            toast.warning('Please enter city')
        } else if (state.length === 0) {
            toast.warning('Please enter state')
        } else if (pinCode.length > 6 || pinCode.length < 6) {
            toast.warning('Please enter a valid Pin Code')
        }  else if (price.length === 0) {
            toast.warning('Please set Price')
        } else {
            const body = {
                packageName,
                isAvailable,
                country,
                state,
                city,
                area,
                pinCode,
                packageType,
                placeImg,
                price,
                
            }

            console.log(body)

            const url = `http://localhost:7070/packages/addpackage`
console.log("inside add method")
            axios.post(url, body).then((response) => {
                console.log("after add method")
                navigate("/home")
                window.alert('Successfully added')
                const result = response.data
                console.log(result['data'])
                if (result['status'] == 'success') {
                    console.log("inside if method")
                    toast.success('Successfully added')
                   
                } else {
                    toast.error(result['error'])
                }
            })
        }
    }

    return (
        <div>
            <h1 className="title my-5">Add Package</h1>

            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form">

                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                Package Name
                            </label>
                            <input
                                onChange={(e) => {
                                    setPackageName(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                Available is ?
                            </label>
                            <br />
                            <input onChange={(e) => {
                                setIsAvailable("Yes")
                            }}
                                type="radio" name="is_host" />
                            Available
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                Country
                            </label>
                            <input onChange={(e) => {
                                setCountry(e.target.value)
                            }}
                                type="text"
                                className="form-control"
                              //  value={"India"}
                               />
                        </div>

                        <div className="mb-3">
                            <label htmlFor=""
                                className="label-control">
                                State
                            </label>
                            <input onChange={(e) => {
                                setState(e.target.value)
                            }}
                                type="text"
                                className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor=""
                                className="label-control">
                                City
                            </label>
                            <input onChange={(e) => {
                                setCity(e.target.value)
                            }}
                                type="text"
                                className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                Area
                            </label>
                            <input onChange={(e) => {
                                setArea(e.target.value)
                            }}
                                type="text"
                                className="form-control"
                                />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                Pin Code
                            </label>
                            <input onChange={(e) => {
                                setPinCode(e.target.value)
                            }}
                                type="number"
                                min="100000"
                                max="999999"
                                className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-form">
                                Package Type
                            </label>
                            <div>
                                <select
                                    onChange={(e) => { setPackageType(e.target.value) }}
                                    name="packageType"
                                    id="hotelType"><option value="Honey moon">Honey Moon</option>
                                    <option value="Family">Family</option>
                                    <option value="Friends">Friends</option>
                                    <option value="Budget">Budget</option></select>
                                    
                                
                            </div>
                        </div>

                      

                       
                        

                       

                        

                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                place Images (if any)
                            </label>
                            <input
                                onChange={(e) => {
                                    setPlaceImg(e.target.value)
                                }}
                                id="image"
                                type="file"
                                className="form-control"
                            />
                        </div>

                       

                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                Price
                            </label>
                            <input onChange={(e) => {
                                setPrice(e.target.value)
                            }}
                                type="number"
                                className="form-control" />
                        </div>

                       
                        

                        <button onClick={addPackage} className="btn btn-primary">
                            Signup
                        </button>


                    </div>
                </div>
                <div className="col"></div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddPackage