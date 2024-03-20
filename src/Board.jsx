import { useState } from "react";
import BoardRow from "./BoardRow";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [nextPlayer, setNextPlayer] = useState("X");
  const isFull = squares.filter((val) => val !== "").length >= 9;
  const hasWinner = calculateWinner(squares);

  const handleClick = (i) => {
    if (squares[i] || isFull || hasWinner) {
      return;
    }
    setSquares([...squares.slice(0, i), nextPlayer, ...squares.slice(i + 1)]);
    setNextPlayer(nextPlayer === "X" ? "O" : "X");
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
    setNextPlayer("X");
  };

  return (
    <>
      <p className="status">
        {hasWinner
          ? `Winner: ${hasWinner}`
          : isFull
            ? "Tie!"
            : `Next Player: ${nextPlayer}`}
      </p>
      {[0, 3, 6].map((val) => (
        <BoardRow
          key={val}
          squares={squares}
          i={val}
          handleClick={handleClick}
        />
      ))}
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </>
  );
}
