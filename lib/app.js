//Google alerts app

function trelloAlertApp (config) {

	var express = require('express');

	var app = express();

	//public directory
	app.use(express.static(__dirname + '/../public'));

	//set port
	app.set('port', process.env.PORT || 5000);

	//set jade as view engine
	app.set('view engine', 'jade');

	//set view template directory
	app.set('views', __dirname + '/views');

	//static assets
	app.use(express.static(__dirname + '/public'));

	/*
	 * routing
	 */

	//default
	app.get('/', function (req, res, next) {
	
		app.emit('indexUnlogged');

		res.render('index_unlogged');
	/*
            res.render('index_unlogged', {
			logged: false, 
			https: false, 
			config: config
		});
	*/
//	    res.send("alertapp running, req:" + req.path);
	
	});

	return app;
}

module.exports = trelloAlertApp;

