const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cons = require('consolidate'),
      path = require('path'),
      dust = require('dustjs-helpers'),
      ejs = require('ejs'),
      dotenv = require('dotenv/config'),
      { Client } = require('pg'),
      fs = require('fs'),
      swaggerTools = require('swagger-tools'),
      jsyaml = require('js-yaml');

// postgres logic pool and connectionString
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS
});
client.connect();

// configure view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());
});

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(require('./routes'));

// Server
app.listen(8080, function() {
  console.log('Server started on port 8080...');
});
