let choices = document.querySelectorAll(".choice");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector(".resetBtn");
// let msgBox =document.querySelector(".game .msg-box")

let you_score=0;
let pc_score=0;

resetBtn.addEventListener("click",()=>{
    you_score = 0;
    pc_score = 0;
    user_score.innerText = `${you_score}`;
    comp_score.innerText = `${pc_score}`;
    localStorage.clear();
});

// local store feature
if(localStorage.getItem('pc_score') == undefined || localStorage.getItem(`you_score`)==undefined){
    you_score = 0;
    pc_score = 0;
}else{
    pc_score = localStorage.getItem('pc_score');
    you_score =localStorage.getItem('you_score');
    user_score.innerText = `${you_score}`;
    comp_score.innerText = `${pc_score}`;
}
// local store feature
function displayMsg (){
    localStorage.setItem(`pc_score`,`${pc_score}`);
    localStorage.setItem(`you_score`,`${you_score}`);
    user_score.innerText = `${you_score}`;
    comp_score.innerText = `${pc_score}`;
}

choices.forEach((choice) =>{ 
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("Your Choice ",userChoice);
        playGame(userChoice);
    });
})

const computerChoice = () => {
    newChoice = ["rock","paper","scissors"];
    let number = Math.floor(Math.random() * 3);
    console.log("Computer Choice is ",newChoice[number]);
    return newChoice[number];
}

const youWinerMsg = () => {
    msg.innerText = "You Won This Chance";
    displayMsg ();
    // msgBox.classList.add('.msgGreen');
    // msgBox.classList.remove('.msgRed');
    // msgBox.classList.remove('.msgWhite');
}
const pcWinerMsg = () => {
    msg.innerText = "Computer Won";
    displayMsg ();
    // msgBox.classList.remove('.msgGreen');
    // msgBox.classList.add('.msgRed');
    // msgBox.classList.remove('.msgWhite');
}
const drawWinerMsg = () => {
    msg.innerText = "Game is draw! Better Luck Next Time!!";
    displayMsg ();
    // msgBox.classList.remove('.msgGreen');
    // msgBox.classList.remove('.msgRed');
    // msgBox.classList.add('.msgWhite');
}

const playGame = (userChoice) => {
    compChoice = computerChoice();
    if( userChoice === compChoice){
        console.log("Game is Draw Better Luck Next Time");
        drawWinerMsg();
    }
    else{
        if(userChoice === "rock" && compChoice === "paper"){
            console.log("computer Winner");
            pc_score++;
            pcWinerMsg();
            
        }
        else if(userChoice === "paper" && compChoice === "rock"){
            console.log("You are winner");
            you_score++;
            youWinerMsg();
        }
        else if(userChoice === "paper" && compChoice === "scissors"){
            console.log("Computer is winner");
            pc_score++;
            pcWinerMsg();
        }
        else if(userChoice === "scissors" && compChoice ==="paper"){
            console.log("You are winner");
            you_score++;
            youWinerMsg();
        }
        else if(userChoice === "scissors" && compChoice === "rock"){
            console.log("Computer is winner");
            pc_score++;
            pcWinerMsg();
        }
        else if(userChoice === "rock" && compChoice === "scissors"){
            console.log("You are winner");
            you_score++;
            youWinerMsg();
        }
    }
}