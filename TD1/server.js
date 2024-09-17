const http = require('http');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.static('public')); // Serveur d'assets statiques
app.get('/', (req, res) => {
res.send(`
<html>
    <head>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <h1>Bienvenue au Royaume Médiéval !</h1>
    </body>
</html>
`);
});

// Route principale

app.get('/', (req, res) => {
    res.send('Bienvenue au Royaume Médiéval !');
});

// Route pour récupérer les classes spells

app.get('/spells', async (req, res) => {
    try {
        const response = await axios.get('https://www.dnd5eapi.co/api/spells');
        const spells = response.data.results;
        res.statusCode = 200;
        res.json(spells);

    } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lors de la récupération des sorts.");
    }
});

app.get('/weapons', async (req, res) => {
    try {
        const response = await axios.get('https://www.dnd5eapi.co/api/equipment-categories');
        const weapons = response.data.results;
        res.statusCode = 200;
        res.json(weapons);

    } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lors de la récupération des weapons.");
    }
});

app.get('/classes', async (req, res) => {
    try {
        const response = await axios.get('https://www.dnd5eapi.co/api/classes');
        const classes = response.data.results;
        res.statusCode = 200;
        res.json(classes);

    } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lors de la récupération des classes.");
    }
});


app.listen(3000, () => {
console.log('Le serveur écoute sur le port 3000');
});

function checkHero(req, res, next) {
    const heroName = req.query.hero;
    if (!heroName || heroName != "Arthur" || heroName != "Napoleon" || heroName != "Charles VII") {
        res.status(400).send('Vous devez spécifier un héros');
    } else {
        next();
    }
}
