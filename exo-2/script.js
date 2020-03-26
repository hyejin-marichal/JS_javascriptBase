// you can write js here
console.log('exo-2');
let isInscrit = false; // boolean
let age = 19;
var raceNumber = Math.floor(Math.random() * 1000);

if (!isInscrit) {
    raceNumber += 1000;
}

if (age >= 18 && isInscrit) {
    console.log('You will race at 9:30 am');
} else if (age >= 18 || isInscrit) {
    console.log('You will race at 11:00 am ' + raceNumber);
} else if (age < 18 || !isInscrit) {
    console.log('You will race at 12:30 pm ' + raceNumber);
} else {
    console.log('Go see the registration desk'); // a qoi ca sert ce else?
}



