import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders portfolio landing content', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /aloha, i'm reina takahara/i })).toBeInTheDocument();
  expect(screen.getByText(/view projects/i)).toBeInTheDocument();
});

test('shows the projects that belong to each expanded category', async () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Wanderful' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'AWS Rekognition' })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /side projects/i }));

  expect(screen.getByRole('heading', { name: 'AWS Rekognition' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Book Hunt' })).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.queryByRole('heading', { name: 'Wanderful' })).not.toBeInTheDocument();
  });
});
