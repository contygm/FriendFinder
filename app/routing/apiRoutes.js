//A GET route with the url /api/friends. 
//This will be used to display a JSON 
//of all possible friends.

//A POST routes /api/friends. 
//This will be used to handle incoming 
//survey results. 
//handle the compatibility logic.

var daOptions = require('../data/friends.js');

module.exports = function(app){
	app.get('/api/friends', function (req, res) {
		res.json(daOptions);
	});

	// app.post('/api/tables', function (req, res) {
	// 	var newReservation = req.body;
	// 	newReservation.routeName = newReservation.customerName.replace(/\s+/g, '').toLowerCase();

	// 	console.log(newReservation);

	// 	reservation.push(newReservation);

	// 	res.json(newReservation);
	// });
}

