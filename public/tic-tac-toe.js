let gameStart = true
window.onload = () => {
    const gameBoard = document.getElementById("game-board");
    const playerTurn = "x";

    gameBoard.addEventListener("click", (e) => {
        e.target.classList.add(playerTurn);
        console.log(e.target);
        playerTurn = playerTurn === "x" ? "o" : "x";
        const win =
        [ [0, 3, 6]
         [1, 4, 7]
         [2, 5, 8] ]


       bestPlayer()
    });

    const header = document.getElementById("displayWinner");
       const newHeading = document.createElement("h1");
       newHeading.innerText = "Winner";
       header.appendChild(newHeading);
      winner()
}

function winner (winnerName) {
    const newHeading = document.getElementbyId("h1")
    const displayWinner = document.getElementbyId('displayWinner');
    displayWinner.innerText = `winner: ${winnerName}`
    newHeading.style.display = "flex";
    newHeading.style.position = "default"
}


 function bestPlayer (win) {
    win.forEach(set => {
        if ((`square-${set[0]}` === "x" && `square-${set[1]}` === "x" && `square-${set[2]}` === "x") ||  (`square-${set[0]}` === "o" && `square-${set[1]}` === "o" && `square-${set[2]}` === "o")) {
            return winner()
        }
    })
}
