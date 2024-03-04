import React, { useEffect, useState } from "react";
import "./App.css";
import pattern from "./pattern";

const init = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [board, setBoard] = useState([...init]);
  const [player, setPlayer] = useState("x");
  const [lIdx, setLidx] = useState(-1);

  const changeTitle = (idx) => {
    if (board[idx] !== "") return;
    setLidx(idx);
    setBoard((board) => {
      return board.map((val, i) => {
        if (i === idx) return player;
        return val;
      });
    });
    setPlayer(player === "x" ? "o" : "x");
  };
  const checkWin = () => {
    if (lIdx < 0) return;
    const checkArr = pattern[lIdx];
    const preplayer = player === "x" ? "o" : "x";
    checkArr.forEach((arr) => {
      if (
        board[arr[0]] === preplayer &&
        board[arr[1]] === preplayer &&
        board[arr[2]] === preplayer
      ) {
        alert(`${preplayer} won`);
        reset();
      }
    });
  };
  const reset = () => {
    setBoard([...init]);
    setPlayer("x");
    setLidx(-1);
  };
  useEffect(() => {
    checkWin();
  }, [board]);

  return (
    <div className="para">
      <p>current player:{player}</p>
      <div className="board">
        {board.map((sq, i) => {
          return (
            <div className="boards" onClick={() => changeTitle(i)}>
              {sq}
            </div>
          );
        })}
      </div>
      <div className="reset">
        <button onClick={() => reset()}>Reset</button>
      </div>
    </div>
  );
}

export default App;
