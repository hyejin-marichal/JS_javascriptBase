// you can write js here
console.log('exo-3');

/**
 *
 * @param userInput
 * @returns {string}
 */

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    if (userInput === 'bomb') {
        return userInput;
    } else {
        throw 'Input error!';
    }
}

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

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tied';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
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
