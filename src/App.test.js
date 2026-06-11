// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoChain/i);
    expect(titleElement).toBeInTheDocument();
});
