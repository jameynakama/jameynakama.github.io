import { render, screen } from '@testing-library/react';

import Home from './Home';

test('renders learn react link', () => {
  render(<Home/>);
  expect(screen.getByText(/jamey/i)).toBeInTheDocument();
  expect(screen.getByText(/joseph/i)).toBeInTheDocument();
  expect(screen.getByText(/nakama/i)).toBeInTheDocument();
});
