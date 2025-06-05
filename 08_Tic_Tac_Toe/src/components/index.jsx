import "./style.css";
import { useState } from "react";

const index = () => {
  let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const [turn, setTurn] = useState(true);

  const game = (e) => {
      let playerO = document.querySelector(".playerO");
      let playerX = document.querySelector(".playerX");
    if (turn) {
      e.target.innerHTML = "O";
      setTurn(false);
      e.target.style.color = "#16D9EB";
      playerX.style.backgroundColor = "#eee";
      playerO.style.backgroundColor = "#eee5";
    } else {
      e.target.innerHTML = "X";
      setTurn(true);
      e.target.style.color = "#c53030";
      playerX.style.backgroundColor = "#eee5";
      playerO.style.backgroundColor = "#eee";
    }
    e.target.disabled = true;
    checkWinner();
  };

  const checkWinner = () => {
    const btns = document.querySelectorAll(".grid-box button");
    const winMsg = document.querySelector(".player-turn h2");
    for (let pattern of winPattern) {
      let pos1val = btns[pattern[0]].innerHTML;
      let pos2val = btns[pattern[1]].innerHTML;
      let pos3val = btns[pattern[2]].innerHTML;

      if (pos1val != "" && pos2val != "" && pos3val != "") {
        if (pos1val === pos2val && pos2val === pos3val) {
          winMsg.style.display = "block";
          winMsg.innerText = `${pos1val} winner!`;
          if (pos1val === "O") {
            winMsg.style.color = "#16D9EB";
          } else {
            winMsg.style.color = "#c53030";
            winMsg.style.backgroundColor = "#fed7d7";
          }
          for (let btn of btns) {
            btn.disabled = true;
          }
        }
      }
    }
  };

  const resetGame = () => {
    const btns = document.querySelectorAll(".grid-box button");
    const winMsg = document.querySelector(".player-turn h2");
    setTurn(true);
    winMsg.style.display = "none";
    for (let btn of btns) {
      btn.innerHTML = "";
      btn.disabled = false;
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <div className="content">
          <div className="grid-box">
            <button onClick={game}></button>
            <button onClick={game}></button>
            <button onClick={game}></button>
            <button onClick={game}></button>
            <button onClick={game}></button>
            <button onClick={game}></button>
            <button onClick={game}></button>
            <button onClick={game}></button>
            <button onClick={game}></button>
          </div>
        </div>
        <div className="player-turn">
          <div className="playerO">O</div>
          <h2>Winner</h2>
          <div className="playerX">X</div>
        </div>
        <div className="buttons">
          <button id="new-game" onClick={resetGame}>
            New Game
          </button>
          <button id="restart" onClick={resetGame}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
