
// show homepage
exports.index = function(req, res){
	// test contents
	let contents = {
		date: '2018'
	}
	// load welcome page
	res.render('welcome', {contents: contents});
}
// show documentation pages
exports.documentation = function(req, res){
	// test contents
	let contents = {
		title: 'Get Started',
		body: 'Hell this is contents one.'
	}

	// load documentation page
	res.render('documentations', {contents:contents});
}
