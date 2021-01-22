import React from "react";

import TicTacToe from "./components/TicTacToe";
import Board from "./components/Board";
import Square from "./components/Square";

class App extends React.Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default App;
