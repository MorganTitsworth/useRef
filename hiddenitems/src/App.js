import React, { useRef, useState } from 'react';
import './App.css';

const App = () => {
  // refrence to the img element
  const imageRef = useRef(null);
  // useState hooks. isHovered tracks if the mouse is hovered over the img
  const [isHovered, setIsHovered] = useState(false);
  // zoomLevel controls how much the img zooms in
  const [zoomLevel, setZoomLevel] = useState(1);
  //zoomPosition follows the mouse & tracks where the img should be centered
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  //calculating the new zoom position based where the mouse is on the img
  const handleMouseMove = (e) => {
    if (isHovered) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setZoomPosition({ x, y });
    }
  };

    //zoom effect for mouse enter
  const handleMouseEnter = () => {
    setIsHovered(true);
    setZoomLevel(2); // Set zoom level on hover
  };

  
    // resets the img to normal size when mouse leave the img area
  const handleMouseLeave = () => {
    setIsHovered(false);
    setZoomLevel(1); // Reset zoom level on mouse leave
  };

  return (
    <div className="app">
      <div
        className="image-container"
        //mouse events
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef}
          src="https://aaagameartstudio.com/wp-content/uploads/2021/06/1-junes-journey-wooga-mobile-art-art-outsource-studio.jpg"
          alt="Hidden Items Puzzle"
          className="magnify-cursor"
          style={{
            transform: `scale(${zoomLevel})`,
            // transform origin for zoom position
            transformOrigin: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`, 
            // transition for smooth zoom
            transition: 'transform 0.1s ease', 
          }}
        />
        </div>
        <div>
          <h1>Find the hidden items</h1>
        </div>
        <div className="checkbox-container">
        <label>
          <input type="checkbox" />
          Broom
        </label>
        <label>
          <input type="checkbox" />
          Gloves
        </label>
        <label>
          <input type="checkbox" />
          Watering Can
        </label>
        <label>
          <input type="checkbox" />
          Bee
        </label>
        <label>
          <input type="checkbox" />
          Shovel
        </label>
        <label>
          <input type="checkbox" />
          Ball
        </label>
        <label>
          <input type="checkbox" />
          Bird House
        </label>
        <label>
          <input type="checkbox" />
          Kite
        </label>
      </div>
    </div>
  );
};

export default App;
