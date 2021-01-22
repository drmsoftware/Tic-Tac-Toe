/* various combinations for a winner based on the squares
   arrays (rows) are used to display the different outcomes */
export function winnerIs(squares) {
  const rows = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8], //relates to either 4,8,0 or 8,4,0
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

  //Winning logic
  for (let i = 0; i < rows.length; i++) {
    const [a, b, c] = rows[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        gameWinner: squares[a],
        itsADraw: false,
        rows: rows[i],
      };
    }
  }
  // Draw logic
  let itsADraw = true;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      itsADraw = false;
    }
  }

  return {
    gameWinner: null,
    itsADraw: itsADraw,
    rows: null,
  };
}
