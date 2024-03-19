import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Layout } from './Layout';

describe('renders layout component', () => {
  it('Should render Layout and header inside component correctly', () => {
    render(
      <Layout>
        <h1 data-testid="header">Inside layout</h1>
      </Layout>,
    );

    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
