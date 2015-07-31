# Example integration of Slack with swagger-node
Slack has some very slick integration options you can use to extend it. This project gives an example of two kinds:

1. `/reverse` a simple command that reverses any text you give it
2. `/ticker` that you can use to lookup a ticker symbol using Google Finance

You must have [swagger-node](https://github.com/apigee-127/swagger-node) installed, and then after downloading/cloning this project, run `npm install`.

After that, you can `swagger project edit` to see the structure of the two APIs, and you can run `swagger project start` to run the application locally. You can use the sample command it gives you to try the application before you deploy it. Before you can use it with Slack, you'll need to set up the integrations at http://slack.com/services.

To see how the controllers work, look at the JavaScript files in `./api/controllers/`.

… and you can deploy these to Apigee Edge using (replace ARGUMENTS IN CAPS):

`apigeetool deploynodeapp -u YOU@DOMAIN.COM -o ORGNAME -e test -n 'slash' -d . -m app.js -b /slash -v default,secure`