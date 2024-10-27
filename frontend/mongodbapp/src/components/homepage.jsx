import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeForm from './homeform'; 

function Homepage() {
  // state setters for basic
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null);

  // state setters for input on form
  const [addressMarket, setaddressMarket] = useState('');
  const [property_type, setPropertyT] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  // func to call listings based on params of address.market/proptype/bedroom
  const getListing = async () => {
    try {
      // instantiating param object
      const params = {};
      // if value is defined add to param 
      if (addressMarket) params.addressMarket = addressMarket;
      if (property_type) params.property_type = property_type;
      if (bedrooms) params.bedrooms = bedrooms;
      // calling API endpoint and setting it to json format whilst using param as the query vals
      const response = await axios.get('/api/sample_airbnb/search', { params });
      setListings(response.data);
     // setting the listings const
     } catch (error) { 
      console.error('failed fetching list:', error); }
  };
// using fetch 
  useEffect(() => {
    getListing();
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}

      {/* homeform.jsx Form */}
      <HomeForm  addressMarket={addressMarket}  
      setaddressMarket={setaddressMarket}
       bedrooms={bedrooms}
       setBedrooms={setBedrooms}
        property_type={property_type}
        setPropertyT={setPropertyT}
        getListing={getListing} />


 {/* get the total listings using .length*/}
      <p className='center-p'>Total Listings: {listings.length}</p>

      {/* Listings Display */}
      <ul className="listingCard">
      {/* iterating through EACH listing and creating a list item for each of them as listing*/}
        {listings.map((listing) => (
          // lsiting items are assigned set keys which are assigned to listing id 
                <li key={listing._id}>
             {/* creating hyper link from prop name where listing.id is used for the URL*/}
               <Link className="listingname" to={`/booking/${listing._id}`}>{listing.name}</Link>
            <br />
            {/* calls stored json(listing) to print info */}
            - Summary: {listing.summary}
            <br />
            - Daily Price: ${listing.price}
            <br />
            - Review Score: {listing.review_scores?.review_scores_rating}
            <br />
            - Address: {listing.address?.market}
            <br />
            - Bedrooms: {listing.bedrooms}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
