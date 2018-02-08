// import mogoose
var mongoose = require('mongoose');
// import promise
mongoose.Promise = global.Promise;

// create a posts Schema
var PasswordReset = new mongoose.Schema({
	token: {
		type: String,
		trim: true,
		required: "input token, field can not be empty"
	},
	email: {
		type: String,
		trim: true,
		required: "can not save empty email"
	}
});

module.exports = mongoose.model('PasswordReset', PasswordReset);