import React from 'react';

const PointBoard = ({ time, onRestart, circleCount, setCircleCount }) => {
  const handleCircleCountChange = (event) => {
    setCircleCount(Number(event.target.value));
  };

  return (
    <div className="scoreboard">
      <div>
        <label>
            Points:
            <input
                type="text"
                value={circleCount}
                onChange={handleCircleCountChange}
                min="1"
            />
            </label>
        </div>
        <div>Time: {time.toFixed(1)}s</div>
        <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default PointBoard;
