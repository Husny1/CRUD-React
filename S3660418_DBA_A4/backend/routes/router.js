const express = require('express');
const router = express.Router();
// call the model
const Schema = require('../models/Schema');

// uses search Schemas using addressMarket, bed, and prop type
// Search Schemas using address market, bedrooms, and property type
router.get('/search', async (req, res) => {
  try {
    const { addressMarket, property_type, bedrooms } = req.query;
    let query = {};

    // add filters to query if they exist, uses 'i' to make it not case sensitive
    if (addressMarket) query['address.market'] = { $regex: addressMarket, $options: 'i' };
    if (property_type) query.property_type = { $regex: property_type, $options: 'i' };
    
    // check if bedrooms is a valid number and add to query
    if (bedrooms && !isNaN(Number(bedrooms))) query.bedrooms = Number(bedrooms);
    else if (bedrooms) return res.status(400).send('invalid bedrooms number');

    // select only needed fields to displ
    const displayGet = {
      _id: 1, name: 1, summary: 1, price: 1,
      'review_scores.review_scores_rating': 1,
      'address.market': 1, property_type: 1, bedrooms: 1,
    };
    // console.error('something went wrong here ', error);
    // get results from database
    const results = await Schema.find(query, displayGet).exec();

    // return 404 if no results
    if (!results.length) return res.status(404).send('no documents found');

    // return results
    res.status(200).json(results);
  } catch (error) {
    // handle error
    console.error('error:', error);
    res.status(500).send('err fetching documents');
  }
});

//test TESTETSTWEST
//await Schema.find({ name: 'john', age: { $gte: 18 } }).exec();

// dropdown fetchs
  router.get('/distinct_bedrooms', async (req, res) => {
    try {
      const distinctBedrooms = await Schema.distinct('bedrooms').exec(); // fixed listing to Schema
      console.log('bedrooms dropdown load');
      res.json(distinctBedrooms);
    } catch (err) {res.status(500).send(err.message);
    }
  });
//Dropdown property_trype fetcg
  router.get('/distinct_props', async (req, res) => {
    try {
      const distinctPropertyType = await Schema.distinct('property_type').exec(); // using distince to only get 1 val
      console.log('props dropdown load');
      res.json(distinctPropertyType);
    } catch (err) {  res.status(500).send(err.message);
    }
  });
  // selected booking route fetching ID
  router.get('/:id', async (req, res) => { // set route
    const id = req.params.id;
    console.log('got ID:', id); // confirmation log 
  
    try {
      const listing  = await Schema.findById(id);  // Changed findOne to findById for _id
      if (!listing ) {
        return res.status(404).send('listing id not found'); // res error
      }
      res.json(listing );
    } catch (error) { console.error('Error =  fetching listing:', error);
          res.status(500).send('error fetching listing');
    }
  });

// post form router to post into specified ID 
router.post('/reservations/:id', async (req, res) => {
  const id = req.params.id;
  try {
    // find lsiting by ID
    const listing = await Schema.findById(id);  // fixed redeclaration of Schema
    if (!listing) {
      return res.status(404).send({ message: 'schema incorrect/not found' });// test
    }

    // create a new reservation object from the req body
    const reservation = {
      checkin: req.body.checkin,
      checkOut: req.body.checkOut,
      name: req.body.name,
      email: req.body.email,
      mobilenumber: req.body.mobilenumber,
      postalAdd: req.body.postalAdd,
      residentialadd: req.body.residentialadd,
    };

    // adding the reservation to the schema model / pushing the reservation array created 
    listing.reservations.push(reservation);
    // console.error('something went wrong here ', error);

    // save the updated listing
    await listing.save();
    console.log('added booking to id', id);
    //error handling / log req
    res.status(200).send({ message: 'added successfully to db', listing });
  } catch (error) { console.error('failed adding reservaton:', error);
    res.status(500).send('failed adding reservation');
    // console.error('something went wrong here ', error);

  }
});

module.exports = router;

