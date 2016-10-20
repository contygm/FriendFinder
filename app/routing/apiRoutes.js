
//A POST routes /api/friends. 
//This will be used to handle incoming 
//survey results. 
//handle the compatibility logic.

var daOptions = require('../data/friends.js');

module.exports = function(app){
	app.get('/api/friends', function (req, res) {
		res.json(daOptions);
	});

	app.post('/api/friends', function (req, res) {
		var newFriend = req.body;
		// newFriend.routeName = newFriend.customerName.replace(/\s+/g, '').toLowerCase();

		console.log(newFriend);

		friends.push(req.body);

		res.json(newFriend);
	});
}

