import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import StagedProgressbar from '../StagedProgressbar';

const singleStage = [{ id: 1, name: 'start' }];
const multiStage = [
  { id: 1, name: 'start' },
  { id: 2, name: 'end' },
];

describe('check if renders', () => {
  it('Single stage', async () => {
    await act(() => {
      render(
        <StagedProgressbar stages={singleStage.map(s => s.name)} progress={1} />
      );
    });

    // Check the stage appears on the timeline
    const title = screen.getByText(/start/i);
    expect(title).toBeInTheDocument();
  });
  it('Multi stage', async () => {
    await act(() => {
      render(
        <StagedProgressbar stages={multiStage.map(s => s.name)} progress={1} />
      );
    });

    // Check both stages appear on the timeline
    expect(screen.getByText(/start/i)).toBeInTheDocument();
    expect(screen.getByText(/end/i)).toBeInTheDocument();
  });

  it('No stage', async () => {
    const { container } = render(
      <StagedProgressbar stages={[]} progress={0} />
    );

    // Check no stages in timeline
    expect(container.querySelectorAll('h2').length).toBe(0);
  });
});

describe('Progress', () => {
  it('First stage', async () => {
    await act(() => {
      render(
        <StagedProgressbar stages={multiStage.map(s => s.name)} progress={1} />
      );
    });

    // Select both progress stage areas
    const area1 = screen.getByText(/start/i).closest('div');
    const area2 = screen.getByText(/end/i).closest('div');

    // Check only the first stage is not gray (will appear primary colour)
    expect(area1).not.toBe(null);
    if (area1 !== null)
      expect(getComputedStyle(area1).backgroundColor).not.toBe('gray');
    expect(area2).not.toBe(null);
    if (area2 !== null)
      expect(getComputedStyle(area2).backgroundColor).toBe('gray');
  });

  it('Second stage', async () => {
    await act(() => {
      render(
        <StagedProgressbar stages={multiStage.map(s => s.name)} progress={2} />
      );
    });

    // Select both progress stage areas
    const area1 = screen.getByText(/start/i).closest('div');
    const area2 = screen.getByText(/end/i).closest('div');

    // Check both stages are not gray (will appear primary colour)
    expect(area1).not.toBe(null);
    if (area1 !== null)
      expect(getComputedStyle(area1).backgroundColor).not.toBe('gray');
    expect(area2).not.toBe(null);
    if (area2 !== null)
      expect(getComputedStyle(area2).backgroundColor).not.toBe('gray');
  });
});
