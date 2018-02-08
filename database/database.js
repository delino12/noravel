// import mongoose
var mongoose = require('mongoose');

// mongoose.connect(process.env.DB_HOST);
mongoose.Promise = global.Promise;

// start connection
mongoose.connect(process.env.DB_HOST).then(function(e){
	console.log('Success, database is connected !');
}).catch( function(e){
	console.error('Error, fail to connect with database !');
	console.error(e);
});
