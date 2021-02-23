/***********************
  Load Components!
  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/

const express = require('express');
const app = express();
app.listen(process.env.PORT);
const PORT = 54842;
const bodyParser = require('body-parser');
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
	res.render('pages/index',{
    pagename:"home",
    construction: false
  });
});

app.get('/WhatIsESG', function (req, res) {
	res.render('pages/whatisesg',{
    pagename:"whatisesg",
    construction: true
  });
});

app.get('/Environment', function (req, res) {
	res.render('pages/environment',{
    pagename:"environment",
    construction: true
  });
});

app.get('/Social', function (req, res) {
	res.render('pages/social',{
    pagename:"social",
    construction: true
  });
});

app.get('/Governance', function (req, res) {
	res.render('pages/governance',{
    pagename:"governance",
    construction: true
  });
});

app.get('/Newsletter', function (req, res) {
	res.render('pages/newsletter',{
    pagename:"newsletter",
    construction: true
  });
});

app.get('/AboutUs', function (req, res) {
	res.render('pages/aboutus',{
    pagename:"aboutus",
    construction: true
  });
});

app.listen(PORT, ()=> {
	console.log(`server running on port ${PORT}`);
});
