const fs = require('fs').promises;

const http = require('http');

const server = http.createServer(async (req, res) => {

try {

const data = await fs.readFile('./message.txt', 'utf8');

res.statusCode = 200;

res.setHeader('Content-Type', 'text/plain');

res.end(data);

} catch (err) {

res.statusCode = 500;

res.end('Erreur interne du serveur.');

}

});

server.listen(3000, () => {

console.log('Le serveur écoute sur le port 3000');

});