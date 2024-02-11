// src/Button.js
import React from 'react';

function Button({ label, onClick }) {
  return (
    <button onClick={onClick} data-testid="button">
      {label}
    </button>
  );
}

export default Button;
