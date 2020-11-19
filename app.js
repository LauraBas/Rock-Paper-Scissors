let imgPlayerChoice = document.getElementById("playerChoice");
let imgComputerChoice = document.getElementById("computerChoice");
let pResult = document.getElementById("result");
let pScore = document.getElementById("score");
let positiveScore = 0;
let negativeScore = 0;

const ROCK = 'rock';
const SCISSORS = 'scissors';
const PAPER = 'paper';

function startGame(choice) {
    let computerChoice = getRandomChoice();
    let winner = getWinner(choice, computerChoice);
    display(choice, computerChoice, winner)
}

function showPlayerChoice(choice) {
    if (choice === ROCK) {
        imgPlayerChoice.setAttribute('src', "rock.png")
    } else if (choice === PAPER) {
        imgPlayerChoice.setAttribute('src', "paper.png")
    } else {
        imgPlayerChoice.setAttribute('src', "scissors.png")
    }
    imgPlayerChoice.innerHTML;
}

function getRandomChoice() {
    let choices = [ROCK, PAPER, SCISSORS]
    let i = parseInt(Math.random() * 3);
    let computerChoice = choices[i];
    return computerChoice;
}

function showComputerChoice(computerChoice) {
    if (computerChoice === ROCK) {
        imgComputerChoice.setAttribute('src', "rock.png")
    } else if (computerChoice === PAPER) {
        imgComputerChoice.setAttribute('src', "paper.png")
    } else {
        imgComputerChoice.setAttribute('src', "scissors.png")
    }
    imgComputerChoice.innerHTML;
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return null;
    }
    if (playerChoice === ROCK) {
        if (computerChoice === PAPER) {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (playerChoice === PAPER) {
        if (computerChoice === ROCK) {
            return 'player';
        } else {
            return 'computer';
        }
    } else {
        if (computerChoice === PAPER) {
            return 'player';
        } else {
            return 'computer';
        }
    }
}

function showWinner(winner, choice, computerChoice) {
    let result = "";
    if (winner === 'player') {
        positiveScore++
        result = "You won"
    } else if (winner === 'computer') {
        negativeScore++
        result = "You lose"
    } else {
        result = "You tied"
    }
    pResult.innerHTML = `${result} choosing <strong>${choice}</strong> against <strong>${computerChoice}</strong>`
    pScore.innerHTML = `You won <strong>${positiveScore}</strong> times. You lose <strong>${negativeScore}</strong> times.`
}

function display(choice, computerChoice, winner) {
    showPlayerChoice(choice);
    showComputerChoice(computerChoice)
    showWinner(winner, choice, computerChoice);
}
