const http = require("http");
const app = require("./app");

//port to listen on
const port = 3000;

const server = http.createServer(app);

server.listen(port);
console.log(`Sevrer listening on  port ${port}`);
