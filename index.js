// This function will randomly return rock paper or scissors
function getComputerChoice(){
    //Generate a random number 0 to 2
    const choice = Math.floor(2*Math.random());
    //return a string for each option corresoponding to each number
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.error(`Invalid choice for computer: ${choice}`);
    }
}

//Test getComputerChoice
function testGetComputerChoice() {
    for(let i = 0; i < 100; i++) {
        try{
            const answer = getComputerChoice();
            console.assert( answer == "rock" || answer == "paper" || answer == "scissors", `Unexpected answer: ${answer}`);
        }
        catch(e) {
            console.log(e);
        }
    }
    console.log('testGetComputerChoice finished');
}


function playGame() {
    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');

    rockButton.addEventListener('click', () => handleClick('rock'));
    paperButton.addEventListener('click', () =>handleClick('paper'));
    scissorsButton.addEventListener('click', () => handleClick('scissors'));
    let humanScore = 0;
    let computerScore = 0;
    // This function will play one round of the game
    function playRound(humanChoice, computerChoice) {
        const rock = "rock";
        const paper = "paper";
        const scissors = "scissors";
        const results = document.querySelector('.results')
        // case where it is a tie return tie and no one gets any points
        if(humanChoice == computerChoice) {
            results.textContent = `It's a tie! ${humanChoice} versus ${computerChoice}`;
        }
        // Case where human wins increment human score
        else if(humanChoice == rock && computerChoice == scissors ||
            humanChoice == paper && computerChoice == rock ||
            humanChoice == scissors && computerChoice == paper
        ) {
            results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        //Case where human loses increment computer score
        else{
            results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
        updateScore();
    }
    function handleClick(humanChoice) {
        playRound(humanChoice, getComputerChoice());
        const gameResults = document.querySelector('#game-results');
        const winner = checkWin();
        if(winner) {
            gameResults.textContent = `${winner} Wins! Final score is Player: ${humanScore} Computer: ${computerScore}`;
            humanScore = 0;
            computerScore = 0;
        }
        else {
            gameResults.textContent = ''
        }
    }
    function checkWin() {
        const WIN_CONDITION = 5;
        if(humanScore >= WIN_CONDITION) {
            return 'Player';
        }
        else if (computerScore >= WIN_CONDITION) {
            return 'Computer';
        }
        else {
            return '';
        }
    }
    function updateScore() {
        const playerScoreElement = document.querySelector('#player-score');
        const computerScoreElement = document.querySelector('#computer-score');
        playerScoreElement.textContent = humanScore;
        computerScoreElement.textContent = computerScore;
    }
}

playGame();