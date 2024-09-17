const legendaryHeroes = ['Napoleon', 'Charles de Gaulle', 'Charles VII de Valois'];
const WorstEnnemies = ['Average Anglish'];

function isLegendaryHero(heroName) {
    return legendaryHeroes.includes(heroName);
}

function isTheWorstThingEver(GarbageName) {
    return WorstEnnemies.includes(GarbageName);
}

module.exports = isLegendaryHero;
module.exports = isTheWorstThingEver;