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
testGetComputerChoice();
//This function will take in the user's input and return it
function getHumanChoice() {
    // Prompt the user to choose rock paper or scissors
    const answer = prompt("Choose rock, paper, or scissors");
    // return the answer as a lower case string
    return answer.toLowerCase()
}
//Test getHumanChoice
function testGetHumanChoice() {
    const tests = [
        {
            request: "Choose rock",
            response: "rock"
        },
        {
            request: "Choose paper",
            response: "paper"
        },
        {
            request: "Choose scissors",
            response: "scissors"
        }
    ]
    for(let i = 0; i < 3; i++) {
        console.log(tests[i].request);
        const choice = getHumanChoice();
        try{
            console.assert(choice == tests[i].response, `Choice is ${choice} should be ${tests[i].response}`);
            if (choice == tests[i].response) {
                console.log(`Correct response recieved ${choice}`)
            }
        }
        catch(e) {
            console.log(e);
        }
    }
    console.log("testGetHumanChoice finished")
}
testGetHumanChoice();

let humanScore = 0;
let computerScore = 0;
// This function will play one round of the game
function playRound(humanChoice, computerChoice) {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    // case where it is a tie return tie and no one gets any points
    if(humanChoice == computerChoice) {
        return console.log(`It's a tie! ${humanChoice} versus ${computerChoice}`)
    }
    // Case where human wins increment human score
    if(humanChoice == rock && computerChoice == scissors ||
        humanChoice == paper && computerChoice == rock ||
        humanChoice == scissors && computerChoice == paper
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    //Case where human loses increment computer score
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore;
    }
}