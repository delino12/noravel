/*================== Run Application ====================*/
// set appliction path
let app = require('./app');
// set database path
// let database = require('./database/database');

// set application port
let PORT = process.env.DB_PORT || 5000;
let HOST = 0.0.0.0;
// start application server
app.listen(PORT, HOST, function (){
	console.log('Launching noravel');
	console.log("Server starting....");
	console.log("Server running: http://localhost:" + PORT);
	console.log("Press Ctrl+C to terminate server");
	console.log("----------(^±^)----------");
});
/*================== End Application ====================*/
