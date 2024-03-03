import { useState } from "react";
import BoardRow from "./BoardRow";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("Next player: X");

  const handleClick = (i) => {
    console.log(count, xIsNext, calculateWinner(squares));
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setCount(count + 1);
    const winner = calculateWinner(nextSquares);
    if (winner) {
      setStatus("Winner: " + winner);
    } else if (count >= 8) {
      // Check if the board is full
      setStatus("Tie Game");
    } else {
      // Switch the player if no winner or tie
      setXIsNext(!xIsNext);
      setStatus("Next player: " + (!xIsNext ? "X" : "O"));
    }
  };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const reset = () => {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
    setCount(0);
    setStatus("Next player: " + (!xIsNext ? "X" : "O"));
  };

  return (
    <>
      <div className="status">{status}</div>
      <BoardRow squares={squares} i={0} handleClick={handleClick} />
      <BoardRow squares={squares} i={3} handleClick={handleClick} />
      <BoardRow squares={squares} i={6} handleClick={handleClick} />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Board;
