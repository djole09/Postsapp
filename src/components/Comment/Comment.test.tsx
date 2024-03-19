import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Comment } from './Comment';

describe('renders comment component', () => {
  it('Should render comments component and its content correctly', () => {
    render(
      <Comment
        name="Some User"
        email="suer@gmail.com"
        body="This is the comment"
        id={1}
        postId={1}
      />,
    );

    expect(screen.getByTestId('comment-1')).toBeInTheDocument();
    expect(screen.getByTestId('comment-1-info')).toBeInTheDocument();
    expect(screen.getByTestId('comment-1-body')).toBeInTheDocument();
  });
});
