'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 http://www.w3schools.com/js/js_strict.asp
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');
var request = require('request');
var googleStocks = require('google-stocks');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  ticker: ticker
};

/*
  Functions in swagger-node controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */

// visit https://slack.com/services and add the "Slash Commands" integration to get a URL
var URL = "https://hooks.slack.com/services/GET/FROM/SLACK";

function ticker(req, res) {
	var symbol = req.swagger.params.text.value.toUpperCase();
	googleStocks.get([symbol], function(error, data) {
  	console.log(symbol+": "+data[0].l);
  	var text = symbol+" is now $"+data[0].l+" per share.\nThanks for asking, @"+req.swagger.params.user_name.value+"!";
  	request.post({ url:URL, body:{"text":text}, json:true});
  	res.status(200).type('application/json').end();
	});
}