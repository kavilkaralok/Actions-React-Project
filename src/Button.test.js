// src/Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button click event', () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(<Button label="Click me" onClick={handleClick} />);

  const button = getByTestId('button');
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

