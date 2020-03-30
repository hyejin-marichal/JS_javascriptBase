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

// 2.créer une function addPlayer qui prends trois arguments : first, last, et age et ajoute à l'objet team un joueur.

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

// utilise une boucle pour sum
//
// function sumPoints(team) {
//     let sumPoints = 0;
//     for (let i = 0; i < team._games.length; i++) {
//         sumPoints += team._games[i].teamPoints;
//     }
//     console.log(sumPoints); // return sumPoints;
// }


// utilise for... in
function sumPoints(obj, pro, pros) {
    let sumPoints = 0;
    for (let points in obj[pro]) {
        sumPoints += obj[pro][points][pros];
    }
    return sumPoints; // return sumPoints;
}


console.log(sumPoints(team, '_games', 'teamPoints')); // console.log(sumPoints(team));

// utilise la methode '.reduce()'
console.log(team._games.reduce((acc, value) => acc + value.teamPoints, 0));

// 6.Calculer la moyenne des points de l'équipe adverse sur tous les matchs

// utilise une boucle pour sum
// function avgRivalPoints(team) {
//     let sumRivalPoints = 0;
//     for (let i = 0; i < team._games.length; i++) {
//         sumRivalPoints += team._games[i].opponentPoints;
//     }
//     let avgRival = sumRivalPoints / team._games.length;
//     console.log(avgRival);
// }
// avgRivalPoints(team);

// utilise for.. in avec funtion sumPoints


function avgRivalPoints(obj, pro, pros) {
    let sumOpp = sumPoints(obj, pro, pros);
    let countOpp = obj[pro].length;
    return sumOpp / countOpp;
    // console.log(sumOpp / countOpp);
    // console.log(`total points of our ${countOpp} rivals : ${sumOpp}  and average : ${sumOpp / countOpp}`);

}

console.log(avgRivalPoints(team, '_games', 'opponentPoints'));


// utilise la methode '.reduce()'

console.log(team._games.reduce((acc, value) => acc + value.opponentPoints, 0) / team._games.length);

// 7. Ecrire une fonction qui permet de trouver le joueur le plus agé.

function findOlder(obj, pro, name, age) {
    let old = 0;
    let nameOld;
    for (let i in obj[pro]) {
        if (old < obj[pro][i][age]) {
            old = obj[pro][i][age];
            nameOld = obj[pro][i][name];
        }
    }
// return old;
    console.log(`le joueur plus agé est ${nameOld} a ${old} ans`)
}

findOlder(team, '_players', 'firstName', 'age');

// utiliser la method sort


// 8. Bonus: Trier les joueurs par ordre alphabétique.

let namePlayer = team._players.sort((a, b) => a.firstName.localeCompare(b.firstName, 'en',
    {ignorePunctuation: true}));
console.log(namePlayer);


console.log("exo-6");

// commenter cette ligne de code.

var joeInfo = {               // une variable joeInfo est un object qui contient 5 pro
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
joeInfo.garage = true;