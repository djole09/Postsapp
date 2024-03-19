import { getComments } from '@/api/getComments';
import { getPosts } from '@/api/getPosts';
import { getUsers } from '@/api/getUser';
import { CommentType } from '@/types/Comment.type';
import { CustomPostType, PostType } from '@/types/Post.type';
import { UserType } from '@/types/User.type';
import { useQueries } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const usePosts = () => {
  const [posts, setPosts] = useState<CustomPostType[]>([]);

  const [postQuery, usersQuery, commentsQuery] = useQueries({
    queries: [
      {
        queryKey: ['posts'],
        queryFn: getPosts,
      },
      {
        queryKey: ['users'],
        queryFn: getUsers,
      },
      {
        queryKey: ['comments'],
        queryFn: getComments,
      },
    ],
  });

  useEffect(() => {
    if (
      postQuery.isSuccess &&
      usersQuery.isSuccess &&
      commentsQuery.isSuccess &&
      !posts.length
    ) {
      setPosts(
        postQuery.data.map((post: PostType) => {
          const postUser: UserType = usersQuery.data.find(
            (user: UserType) => post.userId === user.id,
          );
          const comments: CommentType[] = commentsQuery.data.filter(
            (comment: CommentType) => post.id === comment.postId,
          );

          if (post.userId === postUser.id) {
            return {
              ...post,
              user: postUser,
              comments,
            };
          }

          return post;
        }),
      );
    }
  }, [postQuery, usersQuery, commentsQuery, posts]);

  return {
    posts,
    postsLoading: postQuery.isLoading || usersQuery.isLoading || commentsQuery.isLoading,
  };
};
