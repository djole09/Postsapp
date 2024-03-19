import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SearchForm } from './SearchForm';

describe('renders search component', () => {
  const mockProps = {
    name: 'search',
    value: '',
    placeholder: 'Search',
    id: 'search',
    onChange: vi.fn(),
    resetForm: vi.fn(),
  };
  it('Should render search component and its content correctly', () => {
    render(<SearchForm {...mockProps} />);

    expect(screen.getByTestId('search-container')).toBeInTheDocument();
    expect(screen.getByTestId('search-label')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });

  it('Should render search component and change input value', async () => {
    render(<SearchForm {...mockProps} />);

    const input: HTMLInputElement = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'Bret' } });
  });
});
