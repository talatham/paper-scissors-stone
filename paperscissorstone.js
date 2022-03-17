/* Basic interpretation of Paper Scissors Stone

Computer randomly selects from Paper/Scissors/Stone.
Player selects their choice.
Winner is awarded a point.
Best of five wins.

*/

/* 0=stone, 1=paper, 2=scissors */

/* Return a random integer between 0 and the max value supplied. */
function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

/* Return the user's points and the result for each round. */
function playRound(playerSelection,computerSelection) {

    if (playerSelection==0) {
        switch (computerSelection){
            case 0:
                return [0,"Draw!"];
                break;
            case 1:
                return [-1,"You lose! Stone is wrapped by paper."];
                break;
            case 2:
                return [1,"You win! Stone blunts scissors."];
                break;
        }
    }
    else if (playerSelection==1) {
        switch (computerSelection){
            case 0:
                return [1,"You win! Paper wraps stone."];
                break;
            case 1:
                return [0,"Draw!"];
                break;
            case 2:
                return [-1,"You lose! Paper is cut by scissors."];
                break;
        }
    }
    else if (playerSelection==2) {
        switch (computerSelection){
            case 0:
                return [-1,"You lose! Scissors are blunted by stone."];
                break;
            case 1:
                return [1,"You win! Scissors cuts paper."];
                break;
            case 2:
                return [0,"Draw!"];
                break;
        }
    }

}

function playerChoice() {
    return prompt ("What is your choice? (0=stone, 1=paper, 2=scissors)");
}

function game() {
    
    let score=0;

    for (let i=0;i<5;i++){
        let computerSelection = getRandomInt(3);
        let playerSelection = playerChoice();
        let result = playRound(playerSelection,computerSelection);

        console.log (result[1]);
        score=score+result[0];
    }

    switch (Math.sign(score)) {
        case 1:
            console.log ("Player Wins! Well done.");
            break;
        case 0:
            console.log ("A draw! Shame...");
            break;
        case -1:
            console.log ("Computer Wins! You have doomed mankind.");
            break;
    }
}

game()


tom