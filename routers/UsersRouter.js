const SHA256 = require("crypto-js/sha256");

const SELECTALL = 'select * from ';
const INSERTINTO = 'INSERT INTO ';
const UPDATE = 'UPDATE ';
const DELETE = 'DELETE ';
const USER = 'USER';
const WHERE = ' where ';

module.exports = {
	route: function () {
	    //Get all users
		app.route('/api/users').get((req, res) => {			
			const query = SELECTALL + USER;

			db.query(query, function (err, result) {
	    		if (err) throw err;
				res.send({ result });
  			});
		});

		//Get user by name
		app.route('/api/users/:username').get((req, res) => {
		    const username = req.params['username'];
		    const comparison = `username = ${username}`;
			const query = SELECTALL + USER + WHERE + comparison;

			db.query(query, function (err, result) {
	    		if (err) throw err;
				res.send({ result });
  			});
		});

		//Register user
		app.route('/api/users').post((req, res) => {
		    const username = req.body.username;
		    const password = SHA256(req.body['password']);
		    const name = req.body['name'];
		    const birthday = req.body['birthday'];
		    const city = req.body['city'];

			const query = INSERTINTO + USER + ` (UserName, Password, Name, Birthday, City) VALUES ('${username}', '${password}', '${name}', '${birthday}', '${city}')`;

			db.query(query, function (err, result) {
	    		if (err) throw err;
				res.status(201).send(req.body)
  			});
		});

		//Update user
		app.route('/api/users/:username').put((req, res) => {
			//UPDATE MODULAR
		});

		//Delete user
		app.route('/api/users/:username').delete((req, res) => {
			//DONT DELETE, CHANGE STATUS
		});

		console.log('UserRouter instantiated');
	}
};