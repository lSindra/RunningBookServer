const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const mysql = require('mysql');

const app = express()
const port = 3002
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'runningbook'
});

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(bodyParser.json());
app.use(cors(corsOptions))

app.get('/', (req, res) => res.send('Server is up and running'))

//Get all users
app.route('/api/users').get((req, res) => {
  res.send({
    users: []
  });
});

//Get user by name
app.route('/api/users/:username').get((req, res) => {
    const requestedUserName = req.params['username']
    res.send({ username: requestedUserName });
});

//Register user
app.route('/api/users').post((req, res) => {
  res.send(201, req.body);
  console.log(`Registering user!`);
});

//Update user
app.route('/api/users/:username').put((req, res) => {
  res.send(200, req.body);
});

//Delete user
app.route('/api/cats/:name').delete((req, res) => {
  res.sendStatus(204);
});