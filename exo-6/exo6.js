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


// let addPlayer = (first, last, age) => {
//     team._players.push({
//         firstName: first,
//         lastName: last,
//         age: age
//     });
// }


// 3. Faire la même chose pour un match.

function addGame(rival, teamPoint, rivalPoint) {

    team._games.push({
        opponent: rival, teamPoints: teamPoint, opponentPoints: rivalPoint
    });
}

// 4. Appeler vos fonctions plusieurs fois pour avoir un object avec suffisamment de données.

addPlayer('A', 'aa', 1);
addPlayer('B', 'bb', 2);
addPlayer('C', 'cc', 3);
addPlayer('D', 'dd', 4);
addPlayer('E', 'ee', 5);
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
// function sumPoints(obj, pro, pros) {
//     let sumPoints = 0;
//     for (let points in obj[pro]) {
//         sumPoints += obj[pro][points][pros];
//     }
//     return sumPoints; // return sumPoints;
// }

//utiliser for .of
function sumPoints(array, pros) {
    let sumPoints = 0;
    for (let points of array) {
        sumPoints += points[pros];
    }
    return sumPoints; // return sumPoints;
}
console.log(sumPoints(team._games, 'teamPoints')); // console.log(sumPoints(team));

//  utilise call back
// function sumPoints(array, cb) {
//     let sumPoints = 0;
//     for (let points of array) {
//         sumPoints += cb(points);
//     }
//     return sumPoints; // return sumPoints;
// }
//
//
// console.log(sumPoints(team._games, (game) => game.teamPoints));

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


function avgRivalPoints(array, pros) {
    let sumOpp = sumPoints(array, pros);
    let countOpp = array.length;
    return sumOpp / countOpp;
    // console.log(sumOpp / countOpp);
    // console.log(`total points of our ${countOpp} rivals : ${sumOpp}  and average : ${sumOpp / countOpp}`);

}

console.log(avgRivalPoints(team._games, 'opponentPoints'));


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

// utiliser la method Math.max

// const olderPyaer = () => Math.max(...team._players.map())  // à finir...


// 8. Bonus: Trier les joueurs par ordre alphabétique.

// let namePlayer = team._players.sort((a, b) => a.firstName.localeCompare(b.firstName, 'en',
//     {ignorePunctuation: true}));
// console.log(namePlayer);

let namePlayer = team._players.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1); // pour comparer tout est alphabet soit Majuscule ou Miniscule ca marche sinon utilier facon localeCompare

console.log(namePlayer);


console.log("exo-6");

// commenter cette ligne de code.

var joeInfo = {                // une variable joeInfo est un object qui contient 5 property (key-value)
    name: "Joe's house",       // un property qui nomée name prend une valeur en chaine de caracteres "Joe's house"
    rooms: 5,                  // un property qui nomée rooms prend une valeur l'entier 5
    garage: false,             // un property qui nomée garage prend une valeur type de boolean   false
    bathrooms: 1 + 2,          // un property qui nomée bathrooms prend une valeur calcul mathematique
    cars: ['Clio', 'Van'],     // un property qui nomée a uue valeur un tableau  en chaine de caracteres 'Clio', 'Van'
};


// afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);

// changer le nombre de salle de bains de Joe : il n'en possède au'une.

joeInfo.bathrooms = 1;

// Joe vient d'acquérir un garage changer la structure pour le refléter.
joeInfo.garage = true;