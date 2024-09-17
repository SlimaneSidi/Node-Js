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

app.set('view engine', 'ejs'); // Moteur de rendu

// Route principale

app.get('/', (req, res) => {
    const message = "Bienvenue au Royaume Médiéval !";
    res.render('index', { message });
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


const isLegendaryHero = require('./utils/heroes');
const isTheWorstThingEver = require('./utils/heroes');

function checkHero(req, res, next) {
    const heroName = req.query.hero;

    if (!isLegendaryHero(heroName)) {
        return res.status(403).send("Seuls les héros peuvent entrer.");
    }
    //else if (isTheWorstThingEver(heroName)) {
        //return res.status(403).send("VOUS ! VOUS N'AVEZ PAS D'HONNEUR !");
    //}

    next();
    }
    app.use('/protected', checkHero);
    app.get('/protected', (req, res) => {
    res.send("Bienvenue héro des temps anciens !");
});

