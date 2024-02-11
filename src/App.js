// src/App.js
import React from 'react';
import './App.css';
import Button from './Button';

function App() {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Test React App</h1>
        <Button label="Click me to test me" onClick={handleClick} />
      </header>
    </div>
  );
}

export default App;

