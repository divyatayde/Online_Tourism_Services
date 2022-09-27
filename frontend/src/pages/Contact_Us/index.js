import './index.css'
 
const Contact_Us = () => {
    return (
        <div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10 my-3"><h2>Drop Your Message to US</h2>
                    <div className="row row1">
                        <div className="col-6">
                            <div>
                                <lable className="label-control mt-1" for="firstname">First Name</lable>
                                <input className="form-control form-round mx-1 my-2" type="text" id="firstname" />
                            </div>

                            <div>
                                <lable className="label-control mt-1" for="lastmail">Last Name</lable>
                                <input className="form-control form-round mx-1 my-2" type="text" id="lastname" />
                            </div>

                            <div>
                                <lable className="label-control mt-1" for="Email">Email</lable>
                                <input className="form-control form-round mx-1 my-2" type="text" id="email" />
                            </div>

                            <div>
                                <lable className="label-control mt-1" for="number">Mobile Number</lable>
                                <input className="form-control form-round mx-1 my-2" type="text" id="number" />
                            </div>


                        </div>
                        <div className="col-6">
                            <textarea className="form-control form-round mx-3 mt-4 msg" type="text" id="email" placeholder="Your Message" />
                        </div>
                    </div>
                    <button className="btn btncontact btn-danger my-3">Submit</button>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}

export default Contact_Us;