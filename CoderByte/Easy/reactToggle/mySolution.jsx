import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Toggle() {
  const [toogle, setToggle] = useState(true);

  function handleClick() {
    setToggle(!toogle);
  }
  
  return (
    <button onClick= {handleClick}>{toogle ? 'ON':'OFF'}</button>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Toggle />);