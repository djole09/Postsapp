import axios from '@/config/axiosConf';

export const getUserById = async ({ queryKey }: { queryKey: string[] }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, id] = queryKey;

  const res = await axios({
    method: 'get',
    url: `/users/${id.toString()}`,
  });

  return res.data;
};

export const getUsers = async () => {
  const res = await axios({
    method: 'get',
    url: '/users',
  });

  return res.data;
};
