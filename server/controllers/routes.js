var path = require('path');
var models = require('../models');

var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var handler = require ('./handler.js');
var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())
	  return next();
	res.json({
		message: 'auth didn\'t work'
	});
  }
var models = require('../models');

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
			resuest.json({ message: 'r', donor: request.donor });
		} 
	});
	// app.post('api/new-donor', function(request, response){
	// 			 var first_name = request.body.first_name;
	// 			 var last_name = request.body.last_name;
	// 			 var email = request.body.email;
	// 			 var age = request.body.age;
	// 			 var phone = request.body.phone;
	// 			 var address = request.body.address;

            
                
               
                
	// })

	app.post('/api/new-donor', function(req,res,next) {
		console.log("Donors", typeof Donors)
		models.Donors.create({
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
				age: req.body.age,
				phone: req.body.phone,
				address: req.body.address,
				// blood_group: blood_group,
			}).then(function(donor){
				console.log(donor)
				res.json(donor)
			});
		});
		// res.json(req.body)
		// passport.authenticate('local-newdonor', function(err, donor, info) {
		//     if (err) {
		//       	return next(err);
		// 	}
		// 	console.log(req.body);
		// 	res.json({
		// 		message: 'sup'
		// 	})
		//     // if (!donor) {
		//     // 	return res.status(401).json({ success : false, message : 'authentication failed', info: info });
		//     // }
		//     // req.login(donor, function(err) {
		// 	// 		if (err) {
		// 	// 			return next(err);
		// 	// 	}
		//       	// return res.status(200).json({ success : true, message : 'authentication succeeded', object : user });
		//   });
	//   })(req, res, next);
	// });

	app.delete('/api/logout', function(req, res) {
		req.session.destroy(function() {
			res.status(204).send();
		});
	});

// 	// route to create a donor for poulating DB in Postman
	// app.post('/api/create-donor', (req, res) => {
	// 	console.log(req.body)
	// 	handler.createdonor(
	// 		req.body.first_name,
	// 		req.body.last_name,
	// 		req.body.email,
	// 		req.body.age,
	// 		req.body.phone,
	// 		req.body.address,
	// 		req.body.blood_group,
	// 		(donorsData) => {
	// 			res.json(donorsData);
	// 		}
	// 	);
	// });

// // route to get all donors from the DB
	// app.get('/donors', (req, res) => {
	// 	handler.getAlldonors((donors) => {
	// 		donors.forEach((donor) => {
	// 			donor.first_name = donor.first_name.split(".");
	// 			donor.last_name = donor.last_name.split(".");
	// 			donor.blood_group = donor.blood_group.split(".");
	// 		});
	// 		res.json(donors);
	// 	});
	// });



	app.get('*', function(req,res) {
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});
};
