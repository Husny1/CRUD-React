import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
    
    function BookingConfirmation () {
      const addressMarket = useLocation();
      // assigning the data from bookingform to the state using addressMarket 
      const formData = addressMarket.state;
      const navigate = useNavigate();
      // HANDLE FOR SUBMIT
      const handleHome = () => {
        navigate("/");
      };

      if (!formData) {
        // Handle IF FAIL/0 DATA
        return <div>something went wrong </div>;
      }
    // Uing addressMarket state (input) from bookingform.jsx to pull the informaiton and present here
    // !!!!! IMPORTANT !!!!!
    // THIS IS NOT PULLING FROM MONGODB
      return (
        <div className='confcard'>
          <h1>Booking Confirmation</h1>
          <p><strong>Check-in Date:</strong> {formData.checkin}</p>
          <p><strong>Check-out Date:</strong> {formData.checkOut}</p>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Mobile Number:</strong> {formData.mobilenumber}</p>
          <p><strong>Postal Address:</strong> {formData.postalAdd}</p>
          <p><strong>Residential Address:</strong> {formData.residentialadd}</p>
          {/* Include other fields as necessary */}
          <p>Thank you for your booking we are processing your reservation now!</p>
          <button className='confbutton' type="submit" onClick={handleHome}>return home</button>
        </div>
        
      );
    }

    
    export default BookingConfirmation;
    

