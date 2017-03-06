
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 
// ==============================================================================

var app = express(); 
var PORT = process.env.PORT || 80; 


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app); 








// ==============================================================================
// LISTENER
// The below code effectively "starts" our server 
// ==============================================================================

var PORT = 3000;
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});