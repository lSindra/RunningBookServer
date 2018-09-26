const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const mysql = require('mysql');

const app = express();
const port = 3002;
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'runningbook'
});

global.app = app;

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

db.connect((err) => {
	if (err) {
		console.log('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + db.threadId);
});
global.db = db;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions))

app.get('/', (req, res) => res.send('Server is up and running'))


//Routes
console.log('Instantiating routes');

const UsersRouter = require('./routers/UsersRouter');
UsersRouter.route();
