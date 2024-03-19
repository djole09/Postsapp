import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Post } from './Post';

describe('renders post page component', () => {
  beforeEach(() => {
    vi.mock('@/hooks/usePost', () => ({
      usePost: vi.fn(() => ({
        post: {
          id: 1,
          title: 'Test Post',
          body: 'Test Body',
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
        user: { id: 1, name: 'Test User' },
        postLoading: false,
      })),
    }));
  });
  it('Should render Post page component correctly with its own content', async () => {
    render(
      <MemoryRouter initialEntries={['/post/1']}>
        <Routes>
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('post')).toBeInTheDocument();
      expect(screen.getByTestId('post-title')).toBeInTheDocument();
      expect(screen.getByTestId('post-name')).toBeInTheDocument();
      expect(screen.getByTestId('post-comments')).toBeInTheDocument();
    });
  });
});
