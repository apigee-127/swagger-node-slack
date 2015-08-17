'use strict';

var util = require('util');
var request = require('request');
var googleStocks = require('google-stocks');



module.exports = {
  ticker: ticker
};


//var URL = "https://hooks.slack.com/services/GET/FROM/SLACK";
// For example:
//    var URL = "https://hooks.slack.com/services/T08H0A1/B08YEMHR6/v8DnEDKEuwyDj5uGEEUbGaIF";


function ticker(req, res) {
    var symbol = req.swagger.params.text.value.toUpperCase();
    googleStocks.get([symbol], function(error, data) {
        console.log(symbol+": "+data[0].l);
        var text = symbol+" is now $"+data[0].l+" per share.\nThanks for asking, @"+req.swagger.params.user_name.value+"!";
        request.post({ url:URL, body:{"text":text}, json:true});
        res.status(200).type('application/json').end();
    });
}
