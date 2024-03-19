import { RouteObject, useRoutes } from 'react-router-dom';

import { PAGES } from './constants/pages';
import { Post } from './pages/Post/Post';
import { Posts } from './pages/Posts/Posts';

const customRoutes: RouteObject[] = [
  {
    path: PAGES.POSTS,
    element: <Posts />,
  },
  {
    path: `${PAGES.POST_ITEM}/:id`,
    element: <Post />,
  },
];

export const AppRoutes = () => {
  const routes = useRoutes(customRoutes);

  return routes;
};
