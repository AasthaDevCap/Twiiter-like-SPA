import { render, screen } from '@testing-library/react';
import App from './App';
import Posts from './Routes/Posts';

test('renders learn react link', () => {
  render(<Posts />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
