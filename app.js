'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  console.log("curl -X POST -H 'Content-Type: application/x-www-form-urlencoded' -d 'token=XXXX-XXXX-XXXX&team_id=12345&team_domain=TEAM&channel_id=12345&channel_name=CHANNEL&user_id=12345&user_name=USER&command=%252Freverse&text=Apigee' 'http://127.0.0.1:10010/reverse'");

});
