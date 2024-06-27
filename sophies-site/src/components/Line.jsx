// LineWithDot.jsx
import React from 'react';
import '../styles/Line.css'; // Ensure this contains your CSS

const LineWithDot = ({ dotPosition }) => {
  return (
    <div className="line-container">
      <div className="line">
        <div className="dot" style={{ top: `${dotPosition}%` }}></div>
      </div>
    </div>
  );
};

export default LineWithDot;
