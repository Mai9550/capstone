// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port = 3000;
app.use(express.static('dist'));


// Setup Server
const server=app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};

// TODO-ROUTES!
app.post('/add', Info);

function Info(req, res) {
  projectData['date'] = req.body.date;
  projectData['temp'] = req.body.temp;
  projectData['content'] = req.body.content;
  res.send(projectData);
}
module.exports = server;