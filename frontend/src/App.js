import './App.css';

import { BrowserRouter, Route, Routes , Link } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact_Us';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Service from './pages/Services';
import PackageList from './pages/PackageList';
import PackageDetails from './pages/PackageDetails';
import AddPackage from './pages/AddPackage';
import EditPackage from './pages/EditPackage'
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile'
import Bookings from './pages/Bookings';
import logo from './assets/logo2.png';
import Navbar from './components/Navbar';
import PackageBookingList from './pages/PackageBookingList'; 
import UserBookingList from './pages/UserBookingList';
import RequestList from './pages/RequestsList';
import UserList from './pages/UserList';

import MyPackageList from './pages/MyPackages';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        
        <div className="row">
          <Navbar/>
        </div>
        
        <div className="row" style={{marginTop: "7.5%", width: "99.9%",marginLeft: "0.25%"}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/service" element={<Service />} />w
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/packagelist" element={<PackageList />} />
              <Route path="/packagedetails" element={<PackageDetails />} />
              <Route path="/addpackage" element={<AddPackage />} />
              <Route path="/editpackage" element={<EditPackage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/packagebookings" element={<PackageBookingList />} />
              <Route path="/userbookings" element={<UserBookingList />} />
              <Route path="/requestlist" element={<RequestList />} />
              <Route path="/mypackagelist" element={<MyPackageList />} />
               <Route path="/userlist" element={<UserList/>}/>


            </Routes>
        </div>
      </BrowserRouter>

      <div>
        <footer>
          
        </footer>
      </div>

    </div>
  );
}

export default App;
