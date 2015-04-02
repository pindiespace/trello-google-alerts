//basic app

var config = JSON.parse(require('fs').readFileSync(__dirname +'/config.json', 'utf8'));

//require trello_baseapp (oAuth)
var app = require('trello_baseapp/lib/app')(config);

//express server setup
var alerts = require('./lib/app')(config);

//make the app an express server
app.use(alerts);

//note: port was set in creating 'alerts', used below

app.listen(alerts.get('port'), function () {
	console.log("listening on port:" + config.port);
});
