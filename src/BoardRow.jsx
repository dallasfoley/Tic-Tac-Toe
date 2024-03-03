/* eslint-disable react/prop-types */
import Square from "./Square";

const BoardRow = ({ squares, i, handleClick }) => {
  return (
    <div className="board-row">
      <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
      <Square value={squares[i + 1]} onSquareClick={() => handleClick(i + 1)} />
      <Square value={squares[i + 2]} onSquareClick={() => handleClick(i + 2)} />
    </div>
  );
};

export default BoardRow;
