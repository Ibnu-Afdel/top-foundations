let pcChoice = '';
let myChoice = '';
let result = '';
let humanScore = 0;
let compScore = 0;

function getComputerChoice(){
    const choice = Math.random();

    if(choice <= 1/3 ){
        pcChoice = 'Rock';
    } else if (choice > 1/3 && choice <= 2/3){
        pcChoice = 'Paper';
    } else if (choice > 2/3){
        pcChoice = 'Scissor';
    }
    return pcChoice;
}


function playRound(humanChoice, compChoice){
    if (humanChoice === compChoice){
        return 'Draw';
    } else if (
        (humanChoice === 'Rock' && compChoice === 'Scissor') ||
        (humanChoice === 'Paper' && compChoice === 'Rock') ||
        (humanChoice === 'Scissor' && compChoice === 'Paper')
    )  {
        humanScore++;
        return 'Win';
    } else {
        compScore++;
        return 'Lose';
    }
}

function updateDom(result){
    const domResult = document.querySelector("#result");
    domResult.textContent = `you ${result}! , Computer choose ${pcChoice}, and you choose ${myChoice}`
    const domScore = document.querySelector("#score");
    domScore.textContent = `Computer: ${compScore} | You: ${humanScore}`;

    if (humanScore === 5 ){
        domResult.textContent = "Congratulations! You won the game!";
        resetGame();
    } else if (compScore === 5 ){
        domResult.textContent = "Oh no! Computer won the game.";
        resetGame();
    }
}

function resetGame(){
    humanScore = 0 ;
    compScore = 0 ;
    document.querySelector("#score").textContent =  `Computer: 0 | You: 0`;
}

document.querySelector("#rock").addEventListener("click", ()=>{
    myChoice = 'Rock';
    const computerChoice = getComputerChoice();
    const result = playRound(myChoice, computerChoice);
    updateDom(result);
})

document.querySelector("#paper").addEventListener("click", ()=>{
    myChoice = "Paper";
    const computerChoice = getComputerChoice();
    const result = playRound(myChoice, computerChoice);
    updateDom(result);
})

document.querySelector("#scissor").addEventListener("click", ()=>{
    myChoice = "Scissor";
    const computerChoice = getComputerChoice();
    const result = playRound(myChoice, computerChoice);
    updateDom(result);
})