import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Bform from './bookingform.jsx';

function Booking() {
  // set  const of id/listing/error to use in other func
  const { id } = useParams(); 
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(null);

// use effeect to render the booking info
  useEffect(() => {
    console.log('pulling listing ID from Mongo', id);
    const getListing = async () => {
      try { const response = await axios.get(`/api/sample_airbnb/${id}`); // call router address and assign to const
        setListing(response.data); // making json formated result can then call to display 

        // setting error if fail to reach API router
      } catch (error) { setError(error.response?.data || error.message);
        console.error('error fetching the list (1)', error);
      }
    };
    getListing();
  }, [id]);
// error msg 
  if (error) { return <div>something went wrong :  error msg {error}</div>; }

  if (!listing) { return <p>testetestest</p>;  // or handle error case
     }

  return (
    <div className='row'>
        <div className='column'>
          
    <h1 className='stay'>Stay Details: </h1>
{/* pulling bform func from bookingform component 
then passing const id through the param so the form submits to that listing*/}
      <Bform listingId={id} />
    </div>
     <div className='column'>
      <div className='detailscard'>
      {/* This block below is just showing the booking selected through the useffect response */}
      <h2>booking for: </h2>
      <p>Property name: {listing.name}</p>
      <p>Summary: {listing.summary}</p>
      <p>Daily price: ${listing.price}</p>
      <p>Review Score: {listing.review_scores?.review_scores_rating}</p>
      <p>Address: {listing.address?.market}</p>
      <p>Bedrooms: {listing.bedrooms}</p>
           </div>
       </div>
         </div>
  );
}

export default Booking;

