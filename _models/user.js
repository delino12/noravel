// import mogoose
var mongoose = require('mongoose');
// import promise
mongoose.Promise = global.Promise;

// create a posts Schema
var Users = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: "input name, field can not be empty"
	},
	email: {
		type: String,
		trim: true,
		required: "can not post empty email"
	},
	password: {
		type: String,
		trim: true,
		required: "password can not be empty"
	}
});

module.exports = mongoose.model('Users', Users);
