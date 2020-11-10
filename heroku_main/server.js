/***********************
  Load Components!
  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/

const express = require('express');
const app = express();
const PORT = 54842;
const bodyParser = require('body-parser');
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
	res.render('index');
});

app.listen(PORT, ()=> {
	console.log(`server running on port ${PORT}`);
});
