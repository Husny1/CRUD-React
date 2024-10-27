const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cors settings 
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// import the router file here
const router = require('./routes/router');
// base route + call router will use "/api/sample_airbnb/xxx/xxx" to call router api
app.use('/api/sample_airbnb', router);

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
// consol log test to see if server connects 
// connects db to port 
// must run frontend before backend 
mongoose
  .connect(process.env.DB_URI, dbOptions)
  .then(() => {
    console.log('DB Connected!');
    const port = process.env.PORT || 3000; // if .env config does not register for whatever reason, itll auto assign to 3000
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`); // this will print the port mongo lisining to 
    });
  })
  .catch((err) => console.log(err));



  


