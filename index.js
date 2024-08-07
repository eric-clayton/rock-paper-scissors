// This function will randomly return rock paper or scissors
function getComputerChoice(){
    //Generate a random number 0 to 2
    let choice = Math.floor(2*Math.random());
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
            let answer = getComputerChoice();
            console.assert( answer == "rock" || answer == "paper" || answer == "scissors", `Unexpected answer: ${answer}`);
        }
        catch(e) {
            console.log(e);
        }
    }
    console.log('testGetComputerChoice finished');
}
testGetComputerChoice();