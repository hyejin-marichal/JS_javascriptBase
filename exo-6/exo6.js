// Partie 8 code academy
console.log("code academy");

let team = {
    _players: [{
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11
    }],
    _games: [{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
    }]
};

// 2.créer une fonction addPlayer qui prends trois arguments : first, last, et age et ajoute à l'objet team un joueur.

function addPlayer(first, last, age) {

    team._players.push({
        firstName: first, lastName: last, age: age
    });
}

// 3. Faire la même chose pour un match.

function addGame(rival, teamPoint, rivalPoint) {

    team._games.push({
        opponent: rival, teamPoints: teamPoint, opponentPoints: rivalPoint
    });
}

// 4. Appeler vos fonctions plusieurs fois pour avoir un object avec suffisamment de données.

addPlayer('a', 'aa', 1);
addPlayer('b', 'bb', 2);
addPlayer('c', 'cc', 3);
addPlayer('d', 'dd', 4);
addPlayer('e', 'ee', 5);
addGame('GA', 60, 10);
addGame('NA', 40, 20);
addGame('DA', 50, 40);

console.log(team);

// 5. Calculer la somme des points de votre équipe sur tous les matchs joués.
// version  #1
function sumPoints(team) {
    let sumPoints = 0;
    for (let i = 0; i < team._games.length; i++) {
        sumPoints += team._games[i].teamPoints;
    }
    console.log(sumPoints); // return sumPoints;
}

sumPoints(team); // console.log(sumPoints(team));

// version  #2
console.log(team._games.reduce((acc, value) => acc + value.teamPoints, 0));

// 6.Calculer la moyenne des points de l'équipe adverse sur tous les matchs

// version  #1
function avgRivalPoints(team) {
    let sumRivalPoints = 0;
    for (let i = 0; i < team._games.length; i++) {
        sumRivalPoints += team._games[i].opponentPoints;
    }
    let avgRival = sumRivalPoints / team._games.length;
    console.log(avgRival);
}
avgRivalPoints(team);

// version  #2

console.log(team._games.reduce((acc, value) => acc + value.opponentPoints, 0)/team._games.length);

// 7. Ecrire une fonction qui permet de trouver le joueur le plus agé.






console.log("exo-6");

// commenter cette ligne de code.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};


// afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);

// changer le nombre de salle de bains de Joe : il n'en possède au'une.

joeInfo.bathrooms = 1;
// Joe vient d'acquérir un garage changer la structure pour le refléter.
joeInfo.garage.sturcture = 'refléter';