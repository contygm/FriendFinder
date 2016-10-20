
//A POST routes /api/friends. 
//handle the compatibility logic.

var daOptions = require('../data/friends.js');

module.exports = function(app){
	app.get('/api/friends', function (req, res) {
		res.json(daOptions);
	});

	app.post('/api/friends', function (req, res) {
		var newFriend = req.body;
		var NFtotal = 0;

		daOptions.push(newFriend);



		console.log(daOptions[1].scores);

	});
}

