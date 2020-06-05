let imgPlayerChoice = document.getElementById("playerChoice")
let imgComputerChoice = document.getElementById("computerChoice")

function chooseOne(choice) {
    if (choice === 'rock') {
        imgPlayerChoice.setAttribute('src', "rock.png")
    } else if (choice === 'paper') {
        imgPlayerChoice.setAttribute('src', "paper.png")
    } else {
        imgPlayerChoice.setAttribute('src', "scissors.png")
    }
    imgPlayerChoice.innerHTML;
    getComputerChoice()

}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let i = parseInt(Math.random() * 3);
    if (choices[i] === 'rock') {
        imgComputerChoice.setAttribute('src', "rock.png")
    } else if (choices[i] === 'paper') {
        imgComputerChoice.setAttribute('src', "paper.png")
    } else {
        imgComputerChoice.setAttribute('src', "scissors.png")
    }
    imgComputerChoice.innerHTML


}
