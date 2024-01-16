const arr = ["ROCK","PAPER","SCISSOR"];
let section = document.querySelector("main section");
let outAside = document.querySelector("main section aside");
let article = document.querySelector("main article");
let span = document.querySelector("footer span");
let year = new Date().getFullYear();
span.textContent = year;
let buttonValue ;
function button1(){
    buttonValue = 0;
    // console.log(buttonValue)
    game();
    return buttonValue = 0
}
function button2(){
    buttonValue = 1;
    // console.log(buttonValue)
    game();
    return buttonValue = 1
}
function button3(){
    buttonValue = 2;
    // console.log(buttonValue)
    game();
    return buttonValue = 2
}
function game(){
    let play = true;
    while(play){
        let randomNum = Math.floor(Math.random()*3);
        let playerChoice = arr[buttonValue];
        let result;
        // console.log(playerChoice);
        let computerChoice = arr[randomNum];
        // console.log(computerChoice);
        // console.log(randomNum);
        if(computerChoice == playerChoice){
            result = "TIE";
        }
        else if(computerChoice == "ROCK" && playerChoice == "SCISSOR"){
            result = "Computer Wins!!";
        }
        else if(computerChoice == "SCISSOR" && playerChoice == "PAPER"){
            result = "Computer Wins!!";
        }
        else if(computerChoice == "PAPER" && playerChoice == "ROCK"){
            result = "Computer Wins!!";
        }
        else{
            result = "You Wins!!"
        }
        // console.log(result);
        let output = `
        <h3>You : ${playerChoice}</h3>
        <h3>Computer : ${computerChoice}</h3>
        <h1>${result}</h1>`
        outAside.innerHTML = output;
        article.style.display = "none"
        return section.style.display = "block";
    }
    play = playAgain();
    console.log(play);
}
function playAgain(){
    // location.reload()
    section.style.display = "none";
    article.style.display = "block";
    // console.log(true);
    return play = true
}
// game();