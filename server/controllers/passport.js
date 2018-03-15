var models = require('../models');

var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport) {
// sets up the object to be passed around
	passport.serializeUser(function(user, done) {
		done(null, user);
	});

// passes the object around from route to route
	passport.deserializeUser(function(obj, done) {
		done(null, obj);
	});

	passport.use('local-signin', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true,
	},
	function(req, username, password, done) {
		process.nextTick(function() {
			models.User.findOne({ where: { username: username } }).then(function(user) {
				if (!user)
					return done(null, false, { message: 'no user' });
		        if (!bcrypt.compareSync(password, user.get('password_hash'))) {
		          return done(null, false, { message: 'incorrect password' });
		        }
				return done(null, user);
			});
		});
	}));

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true,
	},
	function(req, username, password, done) {
		process.nextTick(function() {
			models.User.findOne({ where: { username: username } }).then(function(user) {
				if (user) {
					return done(null, false, req.flash('signupMessage', 'That username already taken'));
				} else {
	  				return models.User.create({
	  					name: req.body.name,
	  					username: username,
	  					password: password,
	  				}).then(function(newUser) {
	  					return done(null, newUser);
						}).catch(function(err) {
							console.error(err);
						});
				  }
	  	  });
	   });
	}));

	passport.use('local-registerdonor', new LocalStrategy({
		first_nameField: 'first_name',
		last_nameField: 'last_name',
		emailField: 'email',
		ageField: 'age',
		phoneField: 'phone',
		zipField: 'zip',
		blood_groupField: 'blood_group',

		passReqToCallback: true,
	},
	function(req, first_name, last_name, email, age, phone, zip, blood_group, done) {
		process.nextTick(function() {
			models.Donor.findOne({ where: { first_name: first_name, last_name: last_name, blood_group: blood_group} }).then(function(donor) {
				if (donor) {
					return done(null, false, req.flash('registerdonorMessage', 'That username already taken'));
				} else {
	  				return models.Donor.create({
						   name: req.body.name,
						//   first_name: req.body.first_name,
						//   last_name: req.body.last_name,
							first_name: first_name,
							last_name:last_name,
							email: email,
							age: age,
							phone: phone,
							zip: zip,
							blood_group: blood_group,

							  
	  				}).then(function(newDonor) {
	  					return done(null, newDonor);
						}).catch(function(err) {
							console.error(err);
						});
				  }
	  	  });
	   });
	}));
};
