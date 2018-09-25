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
  console.log('Connected to database!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(bodyParser.json());
app.use(cors(corsOptions))

app.get('/', (req, res) => res.send('Server is up and running'))


//Routes
console.log('Instantiating routes');

const UsersRouter = require('./routers/UsersRouter');
UsersRouter.route(app, con);
