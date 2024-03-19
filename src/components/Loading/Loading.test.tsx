import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Loading } from './Loading';

describe('renders loading component', () => {
  it('Should render Loading component correctly', () => {
    render(<Loading />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
