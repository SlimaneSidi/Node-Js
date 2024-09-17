const http = require('http');
const express = require('express');
const app = express();
const axios = require('axios');

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
