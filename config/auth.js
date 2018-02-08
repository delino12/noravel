// import local strategy
let LocalStrategy  = require('passport-local').Strategy;
let User           = require('../_models/user');
let bcrypt         = require('bcryptjs');
let database       = require('../config/database');

// export local strategy
module.exports = function(passport){
	// init local strategy
	passport.use('local', new LocalStrategy(function (username, password, done){
		// match user email
		let query = {email:username};
		User.findOne(query, function (err, user){
			// check for errors
			if(err) throw err;
			
			// check for user exists
			if(!user){
				return done(null, false, {
					message: 'No user found !'
				});

				console.log('No user found !');
			}

			// match password
			bcrypt.compare(password, user.password, function (err, isMatch){
				// check for compare hash errors
				if(err) throw err;

				// check for compare match results
				if(isMatch){
					// return user object
					return done(null, user)
				}else{
					// match result fail
					return done(null, false, {
						message: 'Wrong password combination !'
					});
				}
			});

			console.log('reach compare hash');
		});
	}));

	// serialize user object
	passport.serializeUser(function (user, done){
		done(null, user.id)
	});

	// de-serialize user object
	passport.deserializeUser(function (id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});

}