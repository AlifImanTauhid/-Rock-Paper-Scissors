// Computer Choices
function getComputerChoice() {
    const computerChoices = Math.random();
    if (computerChoices < 0.34) return 'rock';
    if (computerChoices > 0.34 && computerChoices < 0.67) return 'paper';
    return 'scissors';
}

// Score
let humanScore = 0;
let compScore = 0;

// Play Function
function playRound(human, comp) {
    if (human == comp) return "it's a tie!";
    if (human == 'rock') return (comp == 'paper') ? 'Lose' : 'Win';
    if (human == 'paper') return (comp == 'rock') ? 'Win' : 'Lose';
    if (human == 'scissors') return (comp == 'rock') ? 'Lose' : 'Win';
}

const button = document.querySelectorAll('.btn');
button.forEach(e => {
    e.addEventListener("click", () => {
        const _human = e.className.split(' ').pop();
        const _comp = getComputerChoice();
        const result = playRound(_human, _comp);
        // result
        alert(`You choose ${_human.toUpperCase()} and Computer Choose ${_comp.toUpperCase()}`)
        const display = document.querySelector('.result');
        display.textContent = result.toUpperCase();
        //score
        const hScore = document.querySelector('.hScore');
        const cScore = document.querySelector('.cScore');
        // scoring logic
        if (result == 'Win') {
            hScore.innerHTML = ++humanScore;
            if (humanScore == 5) {
                setTimeout(() => {
                    if (humanScore > compScore) {
                        alert(`Your score is ${humanScore} and Computer score is ${compScore}. YOUR WIN!!!`);
                        location.reload();
                    }
                }, 1300);
            }
        }
        if (result == 'Lose') {
            cScore.innerHTML = ++compScore;
            if (compScore == 5) {
                setTimeout(() => {
                    if (compScore > humanScore) {
                        alert(`Your score is ${humanScore} and Computer score is ${compScore}. COMPUTER WIN!!!`)
                        location.reload();
                    }
                }, 1300);
            }
        }
    })
});
