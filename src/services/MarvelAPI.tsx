import axios from 'axios';

const RequestInterceptor = async (config: any) => {

  config.headers.ContentType = 'application/json';
  return config;
};

const TeddyApi = axios.create({
  baseURL: '',
});

TeddyApi.interceptors.request.use(RequestInterceptor);

export default TeddyApi;
