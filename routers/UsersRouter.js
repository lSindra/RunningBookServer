const sql = require('./SQLCommands');

const SELECTALL = 'select * ';
const INSERTINTO = 'INSERT INTO ';
const UPDATE = 'UPDATE ';
const DELETE = 'DELETE ';
const USER = ' from USER';
const WHERE = ' where ';

module.exports = {
	route: function (app, con) {
	    //Get all users
		app.route('/api/users').get((req, res) => {
			const query = SELECTALL + USER;
			var result = sql.run(query);
			res.send({ result });
		});

		//Get user by name
		app.route('/api/users/:username').get((req, res) => {
		    const username = req.params['username'];
		    const comparison = `username = ${username}`;
			const query = SELECTALL + USER + WHERE + comparison;

			var result = sql.run(query);
			res.send({ result });
		});

		//Register user
		app.route('/api/users').post((req, res) => {
		    const username = req.params['username'];
		    const password = req.params['password'];
		    const name = req.params['name'];
		    const birthday = req.params['birthday'];
		    const city = req.params['city'];

			const query = INSERTINTO + USER + ` (UserName, Password, Name, Birthday, City) VALUES('${username}', '${password}', '${name}', '${birthday}', '${city}')`;
			
			res.send(201, req.body);
		});

		//Update user
		app.route('/api/users/:username').put((req, res) => {
			//TODO
			res.send(200, req.body);
		});

		//Delete user
		app.route('/api/users/:username').delete((req, res) => {
			const username = req.params['username'];
		    const comparison = `username = ${username}`;
			const query = DELETE + USER + WHERE + comparison;

			sql.run(query);
			res.sendStatus(204);
		});

		console.log('UserRouter instantiated');
	}
};