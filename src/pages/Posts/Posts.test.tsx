import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Posts } from './Posts';

describe('renders post page component', () => {
  beforeEach(() => {
    vi.mock('@/hooks/usePosts', () => ({
      usePosts: vi.fn(() => ({
        posts: [
          {
            id: 1,
            title: 'First Post',
            body: 'First Body',
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
          },
        ],
        postsLoading: false,
      })),
    }));
  });

  it('Should render Post page component correctly with its own content', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('posts')).toBeInTheDocument();
    });
  });

  // it('Should render Post page component correctly with its own content', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/']}>
  //       <Routes>
  //         <Route path="/" element={<Posts />} />
  //       </Routes>
  //     </MemoryRouter>,
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByTestId('loading')).toBeInTheDocument();
  //   });
  // });
});
