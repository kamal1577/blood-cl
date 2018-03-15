var path = require('path');
var models = require('../models');

var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
// var handler = require ('./handler.js');
var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())
	  return next();
	res.json({
		message: 'auth didn\'t work'
	});
  }


module.exports = (app, passport) => {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});

	app.get('/api/sign-up', function(req, res) {
		console.log(res);
		if (req.user) {
			res.json({ message: 'signed-in', user_id: req.user.id });
		}
	});

	app.get('/api/sign-in', function(req, res) {
		if (req.user) {
			res.json({ message: 'signed-in', user_id: req.user.id });
		}
	});

	app.post('/api/sign-up', function(req, res, next) {
		passport.authenticate('local-signup', function(err, user, info) {
			if (err) {
				return next(err);
			} else {
				res.json({ user: user, info: info });
			}
		})(req, res, next);
	});

	app.post('/api/sign-in', function(req,res,next) {
		passport.authenticate('local-signin', function(err, user, info) {
		    if (err) {
		      	return next(err);
		    }
		    if (!user) {
		    	return res.status(401).json({ success : false, message : 'authentication failed', info: info });
		    }
		    req.login(user, function(err) {
					if (err) {
						return next(err);
				}
		      	return res.status(200).json({ success : true, message : 'authentication succeeded', object : user });
		  });
	  })(req, res, next);
	});

	app.get('/api/signed-in', (req, res) => {
		console.log(req.user);
		if (req.user) {
			res.json({ message: 'signed-in', user: req.user });
		} else {
			res.json({ message: 'no req.user' });
		}
	});
	
	app.get('/api/new-donor', (request, response) => {
		console.log(request.donor);
		if (request.donor) {
			request.json({ message: 'new donor added', donor: request.donor });
		} 
	});
	

	app.post('/api/new-donor', function(req,res,next) {
		console.log("Donors", typeof Donors)
		models.Donors.create({
				name: req.body.name,
				email: req.body.email,
				age: req.body.age,
				phone: req.body.phone,
				zip: req.body.zip,
			    blood_group: req.body.blood_group,
			}).then(function(donor){
				console.log(donor)
				res.json(donor)
			});
		});

		// define a route to get all donors from the db
		
		app.get('/api/all-donors', function(req,res,next) {
			models.Donors.findAll({
				order: [['zip', 'ASC']] // change to zipcode
			}).then(donors => { 
				console.log(donors)
				res.json(donors);
			})
		});
			
		
		

	app.delete('/api/logout', function(req, res) {
		req.session.destroy(function() {
			res.status(204).send();
		});
	});



	app.get('*', function(req,res) {
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});
};
