let playerText = document.getElementById("playerText");
let boxs = Array.from( document.querySelectorAll(".boxs .box"));
let box = document.querySelector(".boxs");
const o_text = "O";
const x_text = "X";
let currentPlayer = x_text;
let restartBtn = document.getElementById("restart");

// player score variables
let playerOne = document.getElementsByClassName("player1");
let playerTwo = document.getElementsByClassName("player2");
let scoreOfPlayerOne = document.querySelector(".score1");
let scoreOfPlayerTwo = document.querySelector(".score2");
let count1 = 1;
let count2 = 1;

let title = document.getElementById("playerText");
// let spaces = Array(9).fill(null);
// console.log(spaces);
// const winingBox = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];
// console.log(winingBox[0][0]);

// if (square[i] !== "" && square[i] == x_text && square[i] == o_text) {
        //     title.innerHTML = `draw!`;
        // }
let round = document.querySelector(".numOfRound");
let n1 = 1;
function end (num1, num2, num3){
        // title.innerHTML = `${square[0]} winner!`;
        title.innerHTML = `${document.getElementById("box"+num1).innerHTML} winner!`;
        document.getElementById("box"+num1).style.color = "#ffffff75";
        document.getElementById("box"+num2).style.color = "#ffffff75";
        document.getElementById("box"+num3).style.color = "#ffffff75";
        if (document.getElementById("box"+num1).innerHTML == x_text) {
            scoreOfPlayerOne.innerHTML = count1;
            count1++;
            round.innerHTML = n1++;
        } 
        else {
            scoreOfPlayerTwo.innerHTML = count2;
            count2++;
            round.innerHTML = n1++;
        }
        document.getElementById("success").play();
        boxs.forEach(b=> b.removeEventListener("click", clickBox)); 
}
let square = [];
function playerHasWon() {
    for(let i=0;i<9; i++) {
        square[i] =  document.getElementById("box"+i).innerHTML;
    }
    if (square[0] === square[1] && square[1] === square[2] && square[0] != "") {
        end(0,1,2);
    }
    else  if (square[3] === square[4] && square[4] === square[5] && square[3] != "") {
        end(3,4,5);
    }
    else  if (square[6] === square[7] && square[7] === square[8] && square[6] != "") {
        end(6,7,8);
    }
    else  if (square[0] === square[3] && square[3] === square[6] && square[0] != "") {
        end(0,3,6);
}
    else  if (square[1] === square[4] && square[4] === square[7] && square[1] != "") {
        end(1,4,7);
}
    else  if (square[2] === square[5] && square[5] === square[8] && square[2] != "") {
        end(2,5,8);
}
    else  if (square[0] === square[4] && square[4] === square[8] && square[0] != "") {
        end(0,4,8);
}
    else  if (square[2] === square[4] && square[4] === square[6] && square[2] != "") {
        end(2,4,6);
}
}
// function checkDraw() {
//     let isDraw = true;
//     for(let i =0; i<9; i++) {
//         // console.log(board[i]);
//         if(document.getElementById("box"+i) === "" || document.getElementById("box"+i).innerHTML === board[i]) {
//             isDraw = false;
//             break;
//         }
//     }
//     if (isDraw) {
//         for(let i =0; i<9; i++) {
//             for(let j = i +1; j<9; j++) {
//                 if(document.getElementById("box"+i).innerHTML === document.getElementById("box"+j).innerHTML){
//                     isDraw = false;
//                     break;
//                 }
//             }
//             if(!isDraw) {
//                 break;
//             }
//         }
//     }
//     if(isDraw) {
//         title.innerHTML = "draw!";
//         document.getElementById("success").play();
//         boxs.forEach(b=> b.removeEventListener("click", clickBox));
//     }
// }
const startGame = () => {
    boxs.forEach(box => box.addEventListener("click", clickBox));
}
function clickBox(e) {
    if(currentPlayer == x_text && e.target.innerHTML == "") {
    e.target.innerHTML = currentPlayer;
    currentPlayer = o_text;
    title.innerHTML = `${currentPlayer} Turn`;
    }
    else if(currentPlayer == o_text && e.target.innerHTML == "") {
    e.target.innerHTML = currentPlayer;
    currentPlayer = x_text;
    title.innerHTML = `${currentPlayer} Turn`;
    }
    playerHasWon();
    // checkDraw();
    document.getElementById("sound-click").play(); 
    }
    
restartBtn.addEventListener("click", restartGame);
function restartGame() {
    boxs.forEach(box => {box.innerHTML = "";});
    currentPlayer = x_text;
    playerText.innerHTML = "XO Game";
    boxs.forEach(box => {box.style.color = "white";});
    boxs.forEach(b=> b.addEventListener("click", clickBox));
}
startGame();
