import React, { useState, useEffect } from 'react';

const PointCircle = ({ id, onClick }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    setPosition({
      top: Math.random() * 80 + '%',
      left: Math.random() * 80 + '%'
    });
  }, []);

  return (
    <div
      className="circle"
      style={{ top: position.top, left: position.left }}
      onClick={() => onClick(id)}
    >
      {id}
    </div>
  );
};

export default PointCircle;
