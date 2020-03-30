// you can write js here
console.log('exo-3');

/**
 *
 * @param userInput
 * @returns {string}
 */

// const rock = 'rock';
// const paper = 'paper';
// const scissors = 'scissors';
// const bomb = 'bomb';
//const computerInput = [rock, paper, scissor];


function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    if (userInput === 'bomb') {
        return userInput;
    }
        throw 'Input error!';
}
// => on peut utiliser aussi switch
// => function getUserChoice(userInput) {
// userInput.toLowerCase();
// switch (userInput) {
//     case 'rock' :
//         return  userInput;
//
// }

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
        return 'rock';
    }
    if (computer === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
// => d'atutre cas;
// utiliser plustot variable.. que string
//const computerInput = [rock, paper, scissor];
// let chocie = Math.floor(Math.random() * 3);
// return computerInput[choice];

//const tied = 'Tied';
//const Won = 'Won';
//const Lost = 'Lost';


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tied';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') { // => computerChoice ? return Won; return Lost  : pour ecrir dans une phrase
            return 'Won';
        } else {
            return 'Lost';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }
    if (userChoice === 'bomb'){
        return 'Won';
    }
}

function playGame() {
    let uChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log('your choice is : ' + uChoice);
    console.log('computer\'s choice is : ' + computerChoice);
    let vainqueur = determineWinner(uChoice, computerChoice);
    if (vainqueur === 'Won') {
        console.log('you win');
    } else if (vainqueur === 'Lost') {
        console.log('computer win');
    } else {
        console.log('Tied');
    }
}

playGame();


