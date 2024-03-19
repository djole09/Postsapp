import { CustomPostType } from '@/types/Post.type';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { PostItem } from './PostItem';

describe('renders postitem component', () => {
  const mockedData = {
    id: 1,
    body: 'Content of the post',
    title: 'Banner',
    user: {
      name: 'Leanner Bret',
    },
    comments: [
      {
        name: 'Some User',
        email: 'suer@gmail.com',
        body: 'This is the comment',
        id: 1,
        postId: 1,
      },
    ],
  };
  it('Should render PostItem component correctly with its own content', () => {
    render(
      <MemoryRouter>
        <PostItem {...(mockedData as CustomPostType)} />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('post-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('post-item-title-1')).toBeInTheDocument();
    expect(screen.getByTestId('post-item-body-1')).toBeInTheDocument();
    expect(screen.getByTestId('post-item-name-1')).toBeInTheDocument();
    expect(screen.getByTestId('post-item-show-1')).toBeInTheDocument();
  });

  it('After firing show comments click event show comments section', async () => {
    render(
      <MemoryRouter>
        <PostItem {...(mockedData as CustomPostType)} />
      </MemoryRouter>,
    );

    const showEl = screen.getByTestId('post-item-show-1');
    await userEvent.click(showEl);

    expect(screen.getByTestId('post-item-comments-1')).toBeInTheDocument();
  });
});
