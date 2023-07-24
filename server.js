// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

// CORS allows us to manage a Cross-origin resource sharing policy so that our front end can talk to the server.
const cors = require("cors");

// Enable All CORS Requests
app.use(cors());

//body-parser allow the backend to access JSON data sent from the client using request.body in POST route handler.
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Initialize the main project folder
app.use(express.static("website"));

// Callback function to complete GET '/all'
const collectAll = (request, response) => response.status(200).send(projectData);
// GET Route
app.get("/all", collectAll);


// Callback function to complete POST '/add'
const sendData = (request, response) => {
    projectData = request.body;
    console.log(projectData);
    response.status(200).send(projectData);
  }
// GET Route
app.post("/add", sendData);

const portNumber = 4000;
const hostname = "127.0.0.1";

// test the server 
const listenFunc = () =>
console.log(`The Server is running at http://${hostname}:${portNumber}/`);

// spin up the server and show it 
app.listen(portNumber , listenFunc);
