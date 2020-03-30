// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

// 1. enlever le dernier éléments du tableau secretMessage.
let removeLast = secretMessage.pop();
// console.log(secretMessage);
console.log(secretMessage.join(' '));

// 2.ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau.
let addWords = secretMessage.push('to','programme'); // ca marche ne stocker pas dans une variable.
// console.log(secretMessage);
// console.log(secretMessage.join(' '));

// 3. Changer le mot 'easily' par 'right' en accédant au bon index du tableau
let index = secretMessage.indexOf('easily');
let changeWord = secretMessage.splice(index,1,'right'); // secretMessage[easily] = 'right';
// console.log(secretMessage);
// console.log(secretMessage.join(' '));

// 4.supprimer le premier éléments du tableau
let removeFirst = secretMessage.shift();
// console.log(secretMessage);
// console.log(secretMessage.join(' '));

// 5. ajouter la chaine "Programming" en début de tableau
let addFirst = secretMessage.unshift('Programming');
// console.log(secretMessage);
// console.log(secretMessage.join(' '));

//6. remplacer les mots 'get', 'right', 'the', 'first', 'time' par 'know'
let postionStart = secretMessage.indexOf('get');
let changeWords =secretMessage.splice(postionStart,5,'know'); // secretMessage.splice(postionStart,5,'know');
// console.log(secretMessage);
// console.log(secretMessage.join(' '));

// 7. la méthode .join pour afficher le message secret à la console
// console.log(secretMessage);
console.log(secretMessage.join(' '));