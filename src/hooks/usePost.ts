import { getCommentsByPostId } from '@/api/getComments';
import { getPostById } from '@/api/getPosts';
import { getUserById } from '@/api/getUser';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const usePost = (id: string) => {
  const [postQuery, commentsQuery] = useQueries({
    queries: [
      {
        queryKey: ['post', id],
        queryFn: getPostById,
        refetchOnMount: true,
      },
      {
        queryKey: ['comments', id],
        queryFn: getCommentsByPostId,
        refetchOnMount: true,
      },
    ],
  });

  const {
    data: userData,
    refetch,
    isLoading: userIsLoading,
  } = useQuery({
    queryKey: ['user', postQuery?.data?.userId],
    queryFn: getUserById,
    enabled: false,
    refetchOnMount: true,
  });

  useEffect(() => {
    if (postQuery.isSuccess) refetch();
  }, [postQuery.isSuccess, refetch]);

  return {
    post: postQuery.data,
    comments: commentsQuery.data,
    user: userData,
    postLoading: postQuery.isLoading || commentsQuery.isLoading || userIsLoading,
  };
};
