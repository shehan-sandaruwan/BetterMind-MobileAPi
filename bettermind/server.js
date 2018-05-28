const http = require('http');
const app = require('./app');
const nconf = require('nconf');
const port = process.env.PORT ||8080; //this is the port which we intend to communicate

const server = http.createServer(app); // create server to communicate with the server

server.listen(port);// make awake specific port in order to communicate

