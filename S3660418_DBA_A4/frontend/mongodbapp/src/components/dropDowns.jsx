import axios from 'axios';
import { useEffect, useState } from 'react';

// Component used for the drop downs to fetch the distinct data from db to use as select option
// this method was used instead of hardcoding vals

function Dropdowns({ bedrooms, setBedrooms, property_type, setPropertyT }) {
  const [bedroomOptions, setBedroomOptions] = useState([]);
  const [propertyTypeOptions, setPropertyTypeOptions] = useState([]);
  const [error, setError] = useState("");


  
  // funct call to get disinct bedrooms from router
  const getDistinctBedrooms = async () => {
    // try this
    try { const res = await axios.get('/api/sample_airbnb/distinct_bedrooms');
      setBedroomOptions(res.data);
      // if response fail,  catch = log error  to consol
    } catch (error) {console.log(error);
      setError("failed to get bedrooms");
    }
  };

  // call to fetch disinct property_types from router (same logic used as above ^^^)
  const getDistinctProp = async () => {
    try {
      const res = await axios.get('/api/sample_airbnb/distinct_props');
      setPropertyTypeOptions(res.data);
    } catch (error) { console.log(error);  
      setError("failed to get props");  
  }
};

  // fetching when page renders
  useEffect(() => {
    getDistinctBedrooms();
    getDistinctProp();
  }, []);

  return (
    <>
      <div>
        <label className='labelText'>Bedrooms: </label> 
        <select class="custom-select1"  value={bedrooms} // assigning to val bedrooms
        onChange={(e) => setBedrooms(e.target.value)}  >

          <option value=""> Choose Bedrooms</option> {/* using options for dropdown, val obviously = nothing as its just informative text  */}
          {bedroomOptions.map((bedroomValue) => ( // mapping out bedroom vals for dropdown
            <option key={bedroomValue} value={bedroomValue}> {/* each option assigned a key and value based on bedroomValue */}
              {bedroomValue} {/* displaying the bedroomValue inside the options/dropdowns */}
            </option>
          ))}
        </select>
      </div>
<br></br> {/* break used to seperate the dropdowns off each other */}
{/* same logic used above, applied here*/}
      <div class="form-group1">
        <label className='labelText'>Property Type: </label>
        <select class="custom-select2" value={property_type} onChange={(e) => setPropertyT(e.target.value)}>

          <option value="">Choose Property Type</option>
          {propertyTypeOptions.map((typeValue) => (
            <option key={typeValue} value={typeValue}>{typeValue}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Dropdowns;
