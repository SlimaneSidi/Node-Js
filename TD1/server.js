const http = require('http');

const axios = require('axios');

const server = http.createServer(async (req, res) => {

if (req.url === '/spells') {

try {

const response = await axios.get('https://www.dnd5eapi.co/api/spells');

const spells = response.data.results;

res.statusCode = 200;

res.setHeader('Content-Type', 'application/json');

res.end(JSON.stringify(spells));

} catch (err) {

console.error(err);

res.statusCode = 500;

res.end("Erreur lors de la récupération des sorts.");

}

} else {

res.statusCode = 404;

res.end("Route non trouvée.");

}

});

server.listen(3000, () => {

console.log('Le serveur écoute sur le port 3000');

});
