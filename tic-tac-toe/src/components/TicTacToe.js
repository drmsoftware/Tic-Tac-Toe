import React from "react";

import Board from "./Board";

import Square from "./Square";

//Setup tracking who's turn between the players

function TicTacToe() {
  return (
    <div>
      <Square />
    </div>
  );
  // const [trackTurns, setTrackTurns] = useState([Array(9).fill(null)]);
  // const [showNext, setShowNext] = useState(true);
  //const nextTurn = showNext ? "X" : "O";

  // const winningResults = winnerIs(trackTurns);
  // const gameWinner = winningResults.gameWinner;
  //
  // const showResult = winningResults.rows;
  //
  // let result;
  //
  // if (gameWinner) {
  //   result = "And the Winner Is: " + gameWinner;
  // } else if (winningResults.itsADraw) {
  //   result = "A Draw";
  // } else {
  //   result = "Your Turn  " + nextTurn;
  // }
}

export default TicTacToe;
