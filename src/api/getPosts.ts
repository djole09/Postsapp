import axios from '@/config/axiosConf';

export const getPosts = async () => {
  const res = await axios({
    method: 'get',
    url: '/posts',
  });

  return res.data;
};

export const getPostById = async ({ queryKey }: { queryKey: string[] }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, id] = queryKey;

  const res = await axios({
    method: 'get',
    url: `/posts/${id}`,
  });

  return res.data;
};
