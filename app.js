const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cons = require('consolidate'),
      path = require('path'),
      dust = require('dustjs-helpers'),
      db = require('pg'),
      dotenv = require('dotenv/config'),
      { Client } = require('pg');

// postgres logic pool and connectionString
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS
});
client.connect();

// Assign Dust Engine to .dust files
app.engine('dust', cons.dust);

// Set Default Entension .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', function(req, res) {
  res.render('index');
});

// Server
app.listen(8080, function() {
  console.log('Server started on port 8080...');
});
