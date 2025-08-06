import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
    test('renders input fields and button', () => {
        render(<Calculator />);
        expect(screen.getByPlaceholderText(/First number/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Second number/i)).toBeInTheDocument();
        expect(screen.getByText(/Add/i)).toBeInTheDocument();
    });

    test('performs addition and displays result', () => {
        render(<Calculator />);
        fireEvent.change(screen.getByPlaceholderText(/First number/i), { target: { value: '5' } });
        fireEvent.change(screen.getByPlaceholderText(/Second number/i), { target: { value: '7' } });
        fireEvent.click(screen.getByText(/Add/i));
        expect(screen.getByText(/Result: 12/i)).toBeInTheDocument();
    });

    test('shows result as 0 when both inputs are empty', () => {
        render(<Calculator />);
        fireEvent.click(screen.getByText(/Add/i));
        expect(screen.getByText(/Result: 0/i)).toBeInTheDocument();
    });
});