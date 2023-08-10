    const squareZero = document.getElementById("square-0");
    const squareOne = document.getElementById("square-1");
    const squareTwo = document.getElementById("square-2");
    const squareThree = document.getElementById("square-3");
    const squareFour = document.getElementById("square-4");
    const squareFive = document.getElementById("square-5");
    const squareSix = document.getElementById("square-6");
    const squareSeven = document.getElementById("square-7");
    const squareEight = document.getElementById("square-8");

    const win =[
        [squareZero, squareThree, squareSix],
        [squareOne, squareFour, squareSeven],
        [squareTwo, squareFive, squareEight],
        [squareZero, squareFour, squareEight],
        [squareTwo, squareFour, squareSix],
        [squareZero, squareOne, squareTwo],
        [squareThree, squareFour, squareFive],
        [squareSix, squareSeven, squareEight]
    ]

let gameStart = true
window.onload = () => {
    const gameBoard = document.getElementById("game-board");
    let playerTurn = "x";

    gameBoard.addEventListener("click", (e) => {
        e.target.innerText = playerTurn;
        console.log(e.target);
        console.log(e.target.classList);
        playerTurn = playerTurn === "x" ? "o" : "x";

        //set value or innerText of the clicked Square to the currPlayer (x or o) [DONE]
        //prevent square with value from being overwritten []
        //

        

        


        bestPlayer(win)
    });

    // const header = document.getElementById("displayWinner");
    //     const newHeading = document.createElement("h1");
    //     newHeading.innerText = "Winner";
    //     header.appendChild(newHeading);
    //     winner()
}

function winner (winnerName) {
    // const newHeading = document.getElementById("h1")
    const displayWinner = document.getElementById('displayWinner');
    displayWinner.innerText = `winner: ${winnerName}`
    displayWinner.style.display = "flex";
    displayWinner.style.position = "default"
}


function bestPlayer (win) {
    
    win.forEach(set => {
        if ((`square-${set[0]}` === "x" 
        && `square-${set[1]}` === "x" 
        && `square-${set[2]}` === "x") 
        || (`square-${set[0]}` === "o" 
        && `square-${set[1]}` === "o" 
        && `square-${set[2]}` === "o")) {
            return winner()
        }
    })
}

    