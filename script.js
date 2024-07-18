// Computer Choices
function getComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice < 0.34) {
        return 'rock';
    } else if (computerChoice > 0.34 && computerChoice < 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Human Choice
function getHumanChoice() {
    const choice = prompt('Rock, Paper , Scissors?').toLowerCase();
    if (choice === 'rock') {
        return 'rock';
    } else if (choice === 'paper') {
        return 'paper';
    } else if (choice === 'scissors') {
        return 'scissors';
    } else if (choice === null || choice === "") {
        return alert('Please choose the options!')
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    // Play Function
    function playRound(humanChoice, computerChoice) {
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            alert(`you choose ${humanChoice} and computer choose ${computerChoice}. YOU WIN!!`);
            humanScore++;
        } else if (humanChoice === computerChoice) {
            alert("IT'S A TIE!");
        } else if (
            (humanChoice === "scissors" && computerChoice === "rock") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "rock" && computerChoice === "paper")
        ) {
            alert(`you choose ${humanChoice} and computer choose ${computerChoice}. YOU LOSE!!`);
            computerScore++;
        }

        alert(`your score is ${humanScore} and computer score is ${computerScore}`)
    }

    const humanSelection = getHumanChoice();
    const ComputerSelection = getComputerChoice();

    playRound(humanSelection, ComputerSelection);

}

for (let i = 0; i < 5; i++) {
    playGame();
}

if (humanScore > computerScore) {
    alert(`Your score : ${humanScore} and Computer score : ${computerScore} YOU WIN!!!`)
} else {
    alert(`Your score : ${humanScore} and Computer score : ${computerScore} YOU LOSE!!!`)
}
