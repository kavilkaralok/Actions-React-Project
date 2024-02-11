// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading in App component', () => {
  render(<App />);
  const headingElement = screen.getByText(/Test React App/i);
  expect(headingElement).toBeInTheDocument();
});

