const http = require('http');

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/plain');

res.end('Bienvenue dans le Royaume Médiéval !');

});

server.listen(3000, () => {

console.log('Le serveur écoute sur le port 3000');

});