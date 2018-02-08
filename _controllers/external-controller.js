
// show homepage
exports.index = function(req, res){
	// test contents
	let contents = {
		date: '2018'
	}

	// load welcome page
	res.render('welcome', {contents: contents});
}
