const buttons = document.querySelectorAll('.choiseBtn');
const playerText = document.getElementById('playerText');
const computerText = document.getElementById('playerComputer');
const resultText = document.getElementById('playerResult');


function computerPlay() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function playerSelectionHandler(playerSelection) {
    const computerSelection = computerPlay();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = playRound(playerSelection, computerSelection);
}



buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelectionHandler(button.textContent);
    });
});
