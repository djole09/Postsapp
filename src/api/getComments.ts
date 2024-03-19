import axios from '@/config/axiosConf';

export const getComments = async () => {
  const res = await axios({
    method: 'get',
    url: '/comments',
  });

  return res.data;
};

export const getCommentsByPostId = async ({ queryKey }: { queryKey: string[] }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, postId] = queryKey;

  const res = await axios({
    method: 'get',
    url: `/comments?postId=${postId}`,
  });

  return res.data;
};
