import MarvelApi from '@utils/MarvelAPI';
import { AxiosResponse } from 'axios';

  export const getAll = async (): Promise<AxiosResponse<any>> => {
    try {
      const response = await MarvelApi.get('/');
      return response;
    } catch (error) {
      console.error('Erro ao fazer o GET:', error);
      throw error;
    }
  };
