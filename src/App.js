import React, { useRef } from 'react';
import './App.css'; // Import the CSS file

function MyComponent() {
  const inputRef = useRef(null);
  const prevInputValueRef = useRef('');

  // Function to handle input change
  const handleChange = () => {
    const currentValue = inputRef.current.value;
    console.log('Current value:', currentValue);
    console.log('Previous value:', prevInputValueRef.current);
    prevInputValueRef.current = currentValue;
  };

  return (
    <div className="App">
      <input ref={inputRef} type="text" onChange={handleChange} />
    </div>
  );
}

export default MyComponent;
