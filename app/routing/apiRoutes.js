
//A POST routes /api/friends. 
//handle the compatibility logic.

var daOptions = require('../data/friends.js');

module.exports = function(app){
	app.get('/api/friends', function (req, res) {
		res.json(daOptions);
	});

	app.post('/api/friends', function (req, res) {
		var newFriend = req.body;

		daOptions.push(newFriend);

		// score sum function
		function sum(array){
			var result = 0;
			for (var i = 0; i< array.length; i++) {
				result += parseInt(array[i]);
			};
			return result;
		};

		var NFtotal = sum(newFriend.scores);
		var friendDiff = [];

		// get difference between person and friend options
		for (var i = 0; i < daOptions.length; i++){
			var diff = Math.abs(NFtotal - sum(daOptions[i]));
			friendDiff.push(diff);
		}

		// compare friend totals
		function indexOfSmallest(array) {
			var lowest = 0;
			for (var i = 1; i < array.length; i++) {
				if (array[i] < array[lowest]) lowest = i;
			}
			return lowest;
		}

		// find match
		var match = indexOfSmallest(friendDiff);

		console.log(match);
		console.log(NFtotal);
		console.log(friendDiff);

	});
}

