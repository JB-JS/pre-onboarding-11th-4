import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const getSearch = async (q: string): Promise<any> => {
  try {
    const res = await instance.get('/sick', {
      params: {
        q,
      },
    });

    console.info('calling api');

    return res;
  } catch (error) {
    console.log(error);
  }
};
