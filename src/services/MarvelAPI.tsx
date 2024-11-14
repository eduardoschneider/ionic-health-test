import axios from 'axios';

const RequestInterceptor = async (config: any) => {

  config.headers.ContentType = 'application/json';
  return config;
};

const MarvelApi = axios.create({
  baseURL: '',
});

MarvelApi.interceptors.request.use(RequestInterceptor);

export default MarvelApi;
