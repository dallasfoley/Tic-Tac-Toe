export default function BoardRow({ squares, i, handleClick }) {
  return (
    <div className="board-row">
      {[0, 1, 2].map((val) => (
        <button key={val} onClick={() => handleClick(val + i)}>
          {squares[val + i]}
        </button>
      ))}
    </div>
  );
}
