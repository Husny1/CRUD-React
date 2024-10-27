import 'bootstrap/dist/css/bootstrap.css'; // bootstrap import
import './App.css'; // css import
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // react router
import logo from './img/logo.png' // img dir  for logo 

// component imports for pages
import Homepage from './components/homepage.jsx';
import Booking from './components/booking.jsx';
import Bookingconfirm from './components/bookingconfirm.jsx';

//controler comp, applies to all pages 

function App() {
  return (
    <Router>
      <div>
        <nav className='navbar'>
          <ul className="navbar-links">
            
            <div className='center'>
            <li>
            <img  height="100" src={logo} alt="Logo" />
            </li>
            <li>

              <Link rel="stylesheet" to="/">DataBase Applications A4</Link>
         </li>
             <li>
              <p className='name'>Huseyin Bator || S3660418  &copy;</p>
            </li> 
           
              {/* <Link rel="stylesheet" to="/bookingconfirm">Booking Confirmation</Link> */}
              </div>
          </ul>
        </nav>
        <Routes>
          <Route path="/bookingconfirm" element={<Bookingconfirm />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
