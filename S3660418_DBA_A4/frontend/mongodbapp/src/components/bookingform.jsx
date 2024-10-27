import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';


// component for the booking form, exported and called in the booking.jsx file

function Bform({ listingId }) {
  const [checkIn, setcheckIn] = useState('');
  const [checkOut, setcheckOut] = useState('');
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [postal, setpostal] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  // useNavigate to navigate to page onSubmit 
  const navigate = useNavigate();

// want the submit to take in these vals after onsubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {checkin: checkIn,  checkOut: checkOut, name: fullName,  email: email, mobilenumber: mobilePhone, postalAdd: postal, residentialadd: homeAddress, }
    {
      navigate('/bookingconfirm', { state: formData })    
  // nav to the confrimation page, passing the form data as state
    };

    try {
      // get post req router taking listing id url and form data as the param to post 
      const response = await axios.post(`/api/sample_airbnb/reservations/${listingId}`, formData);
      console.log('reservation submitted', response.data);
    } catch (error) {
      // error to handle fail
      console.error('error/failed posting', error);
    }
  };

  return (
    // When form submited it will exec the handle made above^^^
    <form onSubmit={handleSubmit}>
      <div className='bookingcard'>
      <label className='label1'>Check-In Date: </label>
      <div>
        <input className='Form1' //css class
          type="date" // type of value used 
          value={checkIn} // assigning input to this val
          onChange={(e) => setcheckIn(e.target.value)} // handling user input on change then setting input changes to curr val
        />
      </div>
      <br />
      <label className='label1'>Check-Out Date: </label>
      <div>
        <input className='Form1'type="date"value={checkOut} onChange={(e) => setcheckOut(e.target.value)}/>
      </div>
      <br />
      <label className='label1' >FullName: </label>
      <div >
        <input className='Form1' type="text" value={fullName} onChange={(e) => setfullName(e.target.value)} 
        placeholder="Enter client name" />
      </div>
      <br />
      <label className='label1'>Email Address: </label>
      <div>
        <input className='Form1' type="text" value={email} onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email"/>
      </div>
      <br />
      <label className='label1'>Mobile No.: </label>
      <div>
        <input className='Form1' type="text"  value={mobilePhone} 
        onChange={(e) => setMobilePhone(e.target.value)} 
        placeholder="Enter a mobile no."/>
      </div>
      <br />
      <label className='label1'>Postal Address: </label>
      <div>
        <input className='Form1'  type="number" value={postal} onChange={(e) => setpostal(e.target.value)}
          placeholder="Enter your postal address"
        />
      </div>
      <br />
      <label className='label1'>Home Address: </label>
      <div>
        <input className='Form1' type="text" value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)}
          placeholder="Enter your home address" />
      </div>
      <br />
      </div>
      <button className='bfrombutton' type="submit">Submit</button>
    </form>
    
  );
}

export default Bform;
