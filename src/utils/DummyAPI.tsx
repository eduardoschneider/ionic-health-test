import axios from 'axios';

const RequestInterceptor = async (config: any) => {

  config.headers.ContentType = 'application/json';
  return config;
};

const DummyApi = axios.create({
  baseURL: 'https://dummyjson.com/user/',
});

DummyApi.interceptors.request.use(RequestInterceptor);

export default DummyApi;
