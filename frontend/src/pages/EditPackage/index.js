import './index.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../../config'

const EditPackage = () => {
   return (
        <div className="my-4">
            <div className="row">
                <h1>Edit Package details</h1>
                <div className="col"></div>
            </div>
        </div>
        )
}

export default EditPackage