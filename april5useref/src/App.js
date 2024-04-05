import React, { useRef, useState } from 'react';
import './Clicker.css'; // Import CSS file for styling

function Clicker() {
  const clickRef = useRef(0);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    clickRef.current += 1;
    setClickCount(clickRef.current);
  };

  return (
    <div className="container">
      <div className="clicker-box">
        <h1>Click and Count!</h1>
        <button onClick={handleClick}>Click Me</button>
        <p>Clicked: {clickCount} times</p>
      </div>
    </div>
  );
}

export default Clicker;