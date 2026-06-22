import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio landing content', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /aloha, i'm reina takahara/i })).toBeInTheDocument();
  expect(screen.getByText(/view projects/i)).toBeInTheDocument();
});
