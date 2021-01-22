import React, { useState } from "react";

import Square from "./Square";
import "../Board.css";

import { winnerIs } from "../winnerIs";

//Board setup

function Board() {
  const [squaresOnBoard, setSquaresOnBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const nextPlayer = xTurn ? "X" : "O";

  const winning = winnerIs(squaresOnBoard);
  const gameWinner = winning.gameWinner;

  const winningInfo = winning.rows;

  let result;

  if (gameWinner) {
    result = "And the Winner Is: " + gameWinner;
  } else if (winning.itsADraw) {
    result = "A Draw";
  } else {
    result = "Your Turn Player: " + nextPlayer;
  }

  function squareFun(i) {
    return (
      <Square
        onClick={() => {
          if (squaresOnBoard[i] != null || gameWinner != null) {
            return;
          }
          const nextSet = squaresOnBoard.slice();
          nextSet[i] = xTurn ? "X" : "O";

          //This will switch the turns between players
          setXTurn(!xTurn);

          setSquaresOnBoard(nextSet);
        }}
        value={squaresOnBoard[i]}
        theWinner={winningInfo && winningInfo.includes(i)}
      />
    );
  }

  function Reset({ onClick }) {
    return (
      <button className="reset" onClick={onClick}>
        New Game
      </button>
    );
  }

  function ResetGame() {
    return (
      <Reset
        onClick={() => {
          setSquaresOnBoard(Array(9).fill(null));
          setXTurn(true);
        }}
      />
    );
  }
  //Arranging the squares to be in 3 rows
  return (
    <div className="board__container">
      <div className="board">
        <h1>Let's Play Tic-Tac-Toe </h1>
        <br />
        <br />
        {result}
        <div className="board__row1">
          {squareFun(0)}
          {squareFun(1)}
          {squareFun(2)}
        </div>
        <div className="board__row2">
          {squareFun(3)}
          {squareFun(4)}
          {squareFun(5)}
        </div>
        <div className="board__row3">
          {squareFun(6)}
          {squareFun(7)}
          {squareFun(8)}
        </div>
      </div>
      <div className="reset__button">{ResetGame()}</div>
    </div>
  );
}

export default Board;
