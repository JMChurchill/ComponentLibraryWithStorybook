import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterItem from './FilterItem';

it('Check if renders', () => {
  render(<FilterItem id={1} name="item" onDelete={() => {}} />);

  const filterElement = screen.getByText(/item/i);
  expect(filterElement).toBeInTheDocument();
});

it('On click', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  const { container } = render(
    <FilterItem
      id={1}
      name="item"
      onDelete={() => {
        console.log('testing...');
      }}
    />
  );

  const deletebutton = container.querySelector('svg');

  if (deletebutton) {
    fireEvent.click(deletebutton);
  }
  expect(consoleSpy).toHaveBeenCalledWith('testing...');
});
