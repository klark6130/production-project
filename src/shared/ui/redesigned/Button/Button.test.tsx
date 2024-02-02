import React from 'react';

import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('render TEST', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with class', () => {
        render(<Button variant={'clear'}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        // screen.debug();
    });
});
