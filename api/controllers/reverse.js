'use strict';

var util = require('util');
var request = require('request');
var token = "secret123";

module.exports = {
  reverse: reverse 
};


function checkToken(req, res, cb) {

  var keyParam = req.swagger.params.token.value;

  if (keyParam === token) {
    return cb ("", "Valid token received.");
  } else {
    return cb("Error: Sorry, the token key is invalid.");
  }
}
 
function reverse(req, res) {

  checkToken(req, res, function(err, reply) {
    if (err) {
        return res.json(err); 
    } else if (req.swagger.params.text.value === "") {
        res.json("Please enter some text to reverse!");
    } else {
        console.log(reply);
        var gnirts = req.swagger.params.text.value.split('').reverse().join('');
        res.json(gnirts);
    }
  });
}
