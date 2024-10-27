import React from 'react';
import Dropdowns from './dropDowns';

// Component for the homepage form 
// called directly into homepage
// takes in props from dropdowns so it can be used here 
function HomeForm({ addressMarket, setaddressMarket, bedrooms, setBedrooms, property_type, setPropertyT, getListing }) {
  return (
    // fortm is taking in fetchlisting used on homepage to get the listing for the values bellow 
    <form className='filterForm' onSubmit={(e) => {
        e.preventDefault();  getListing(); }} >
      <div className="form-group">
        <label className='labelText'>Market Adress: </label>
        <input className='inputHome' type="text" value={addressMarket}  onChange={(e) => setaddressMarket(e.target.value)}
          placeholder="addressMarket Address"
        />
      </div>
      <div>
        {/* dropdowns component call and passs param val*/}
        <Dropdowns bedrooms={bedrooms} setBedrooms={setBedrooms} property_type={property_type} setPropertyT={setPropertyT} />
      </div>
      <button className='homeButton' type="submit">search now</button>
    </form>
  );
}

export default HomeForm;
