let player1= prompt("Enter the Name of Player1");
let player2= prompt("Enter the Name of Player2");
let boxes = document.querySelectorAll(".box");
let resetbtn =document.querySelector("#reset");
let winPerson;
let winCombination = [ [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let msgbox =document.querySelector(".msg_box");
let msg = document.querySelector("#msg");
let chanceMsg = document.querySelector(".chanceMsg")
let newGame = document.querySelector("#newgame");
let turn0 = true ;
let count = 0;
chanceMsg.innerText=`Chance of ${player1}`;
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("Box was clicked");
        if(turn0 == true){
            box.innerText ="O";
            turn0=false;
            chanceMsg.innerText=`Chance of ${player2}`;
            winPerson=player1;
        }
        else{
            box.innerText ="X";
            turn0=true;
            chanceMsg.innerText=`Chance of ${player1}`;
            winPerson=player2;
        }
        box.disabled =true;
        count++;
        let isWinner = checkWinner();
        if(count === 9 && isWinner != true){
            gameDraw();
        }
    });
});

const showWinner =(winnerPlayer) => {
    msgbox.classList.remove("hide");
    msg.innerText = `Winner is player ${winnerPlayer}, ${winPerson}`;
}

const checkWinner = () => {
    for(let pattern of winCombination){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText ;
        if(pos1Val !=="" && pos2Val !=="" && pos3Val !==""){
            if(pos1Val === pos2Val && pos2Val === pos3Val && pos1Val === pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
}

const gameDraw = ()=>{
    msg.innerText="Oops! Game is Draw Better Luck Next Time";
    msgbox.classList.remove("hide");
    count=0;
}



let clearBtn = () =>{
    for(box of boxes){
    box.innerText="";
    }
}

let enableBtn =() =>{
    for(box of boxes){
        box.disabled= false;
    }
    msgbox.classList.add("hide")
}

newGame.addEventListener("click",()=>{
    clearBtn();
    enableBtn();
    count = 0;
    player1=prompt("Enter name of player1");
    player2=prompt("Enter name of player2");
})

resetbtn.addEventListener("click",()=>{
    clearBtn();
    enableBtn();
    count = 0;
})