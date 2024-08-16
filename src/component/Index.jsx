// App.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPoints,
  setTime,
  setCircles,
  setIsRunning,
  setCircleCount,
} from '../redux/pointSlices';
import PointBoard from './PointBoard';
import PointCircle from './PointCircle';
import '../App.css';

function Index() {
  const dispatch = useDispatch();
  const { points, time, circles, isRunning, circleCount } = useSelector((state) => state.game);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => dispatch(setTime(time + 0.1)), 100);
    }
    return () => clearInterval(timer);
  }, [isRunning, time, dispatch]);

  const handleCircleClick = (id) => {
    dispatch(setPoints(points + 1));
    dispatch(setCircles(circles.filter((circle) => circle !== id)));
  };

  const handleRestart = () => {
    dispatch(setPoints(0));
    dispatch(setTime(0));
    dispatch(setCircles(Array.from({ length: circleCount }, (_, i) => i + 1)));
    dispatch(setIsRunning(true));
  };

  useEffect(() => {
    if (circles.length === 0 && isRunning) {
      dispatch(setIsRunning(false));
    }
  }, [circles, isRunning, dispatch]);

  return (
    <div className="app">
      <h4>Let's Play</h4>
      <PointBoard
        time={time}
        onRestart={handleRestart}
        circleCount={circleCount}
        setCircleCount={(count) => dispatch(setCircleCount(count))}
      />
      <div className="game-area">
        {circles.map((id) => (
          <PointCircle key={id} id={id} onClick={handleCircleClick} />
        ))}
      </div>
      {circles.length === 0 && !isRunning && (
        <div className="all-cleared">ALL CLEARED</div>
      )}
    </div>
  );
}

export default Index;
