window.onload = () => {
    const gameBoard = document.getElementById("game-board");
    const playerTurn = "x";

    gameBoard.addEventListener("click", (e) => {
        e.target.classList.add(playerTurn);
        console.log(e.target);
        playerTurn = playerTurn === "x" ? "o" : "x";
    })
}