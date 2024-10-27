# Student
Huseyin Bator 
S3660418

## Over view of how the application files work
Backend folder contains 4 mains files, each playing a different part.
Frontend/MongoDBapp folder only uses components/app.js/app.css/img(folder)
both front and backend listen to eachother on port 3000

### backend
Models/Schema - 
We need a file that will describe the information structure/properties needed to be pulled and pushed from mongodb. we then use this exported model in our router.js

routes/router - 
This file is where the mongoDB magic happens. This will use our Schema file variables to create API's for our front-end whilst also help us execute our MongoDB queries.

backend/root directory (index.js) - 
this is where we make the database connection establish using the configuration variables in the DOTENV file. The index also holds the configuration and base API starting point for our routes. 

backend/root directory (DOTENV) - 
our environmental configuration stores the listening port and the MongoDB collection string. This file is turned into a variable that is intergrated in the index.js.

### frontend
FrontEnd folder contains all of the front-end for the project. It also contains query parameters for our queries.

/components - 
this folder holds each individual components used for the project. Page components were broken down further into small components such as:

 - "homeForm" and "bookingform" are the forms that are used for the homepage and booking page. They were broken down into smaller components to make the code more clean and readable for what is being done on the homepage and bookingpage. 

 - "homepage.jsx", "booking.jsx" and "bookingconfirm.jsx" are components for the pages that are rendered. they hold states and mostly functions for the backends to execute the quries.

 - "dropDowns" - the drop downs for the homepage where they call the routes for distince queries to produce the dropdown.

frontend/root directory (App.js) - 
This file is were we route all the webpages together. it was also meant to contain the navigation bar for the website, however due to structure of the project it was unneccesary.


frontend/root directory (App.css) - 
this file contains all the css that is used throughout the web application.

/img - 
this folder was used to store imgs for the website frontend

all other files were unused and are  from reacts boiler-plate.

## Project start instructions

<!-- manual setup if no dependenecies  -->

### Frontend start( runs on port 3000):
-cd frontend/mongodbapp
#### install required dependencies first:

npm install body-parser
npm install bootstrap
npm install react
npm install react-dom
npm install react-router-dom
npm install react-scripts
npm install web-vitals
### start frontend 
```npm start```

## open another terminal or powershell 
open another shell or terminal window whilst frontend is running 
back and front end need to run simultanuosly 

### Backend start (runs on port 3000): 
- cd backend  
#### install required dependencies first:
npm install axios
npm install cors
npm install dotenv
npm install express
npm install mongodb
npm install mongoose
### start backend 
```node index.js```
### or 
```nodemon index.js```

<!-- quick setup if dependencies are installed :  -->

to start the project you MUST
cd in to the /frontend directory then cd into /mongodbapp directory
then run:
```npm start```

open up another terminal then cd into /backend
then run : 
```nodemon index.js```

Open up localhost browser
[http://localhost:3000]



### .env file
The .Env file in the backend has the configuration settings for ports and MongoDB connection string. Its then used as a variable to configure the backend main (Index.js) file. Edit the .env file if needed to. 

## Access
To access the website after running you can visit: 
Open [http://localhost:3000]to view it.

The page will reload when you make changes to the frontend folder.
You may also see any lint errors in the console.


## NPM INSTALLS 

Note : IF YOURE MISSING DEPENDENCIES THESE ARE THE ONLY NPMS INSTALLED 
- HAVE NODE INSTALLED

npm i express mongoose mongodb cors - used to create project Backend 
npm install axios - used to connect routers
npm install cors - cors used to translate  mongodb to react
npm install react-router-dom - used for routing to api endpoints 
npm install -g nodemon

to remove unneseccary deps
npm prune


## project template was created with 
NPX CREATE-REACT-APP - used to create project frontend

## References 

MongoDB schema and API calls to exec queries
https://mongoosejs.com/docs/guide.html
https://mongoosejs.com/docs/api/model.html#Model.find()

video that helped me get started on Connecting front/backend
https://www.youtube.com/watch?v=Bxagh8EG-ak&ab_channel=CodrKai

css/ homepage cards 
https://css-tricks.com/almanac/properties/t/translate/

axios usage 
https://www.digitalocean.com/community/tutorials/react-axios-react

use state/use effect 
https://codedamn.com/news/reactjs/usestate-and-useeffect-hooks

## consult questions 
<!-- get feedback on readme 
get feedback on webapp interface 
talk about how you did things
then submmit
make any changes if needed. -->