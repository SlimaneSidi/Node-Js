const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

fs.readFile('./message.txt', 'utf8', (err, data) => {

    if (err) {
        res.statusCode = 500;
        res.end('Fichier non trouvé !');
        console.error(err);
        return;
    }
    console.log(data);

});

res.statusCode = 200;

res.setHeader('Content-Type', 'text/plain');

res.end('Bienvenue dans le Royaume Médiéval !');

});

server.listen(3000, () => {

console.log('Le serveur écoute sur le port 3000');

});