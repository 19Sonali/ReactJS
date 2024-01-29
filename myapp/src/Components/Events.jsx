import React, { useState } from 'react';

const SquareImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const imageSize = isHovered ? '400px' : '200px';

  return (
    <img
      src="myapp/src/download.jpg"
      alt=""
      style={{ width: imageSize, height: imageSize, transition: 'width 0.5s, height 0.5s' }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default function Events() {
  const OnClick = () => {
    alert("This is an onClick event function");
  };

  const MouseOver = () => {
    alert("This is onMouseOver event");
  };

  return (
    <div>
      <h1 style={{ color: 'white', backgroundColor: 'red' }}>Events</h1>
      <button onClick={OnClick}> ON CLICK</button>

      <h2 onMouseOver={MouseOver} style={{ backgroundColor: 'green' }}>
        On Mouseover
      </h2>

      {/* Task: print a square image of 200px when you move the cursor, increase size to 400px when the cursor moves out, restore to 200px */}
      <SquareImage />
    </div>
  );
}
