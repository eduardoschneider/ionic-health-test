import MarvelApi from '@utils/MarvelAPI';
import { AxiosResponse } from 'axios';

  export const getAllCharacters = async (page: number): Promise<AxiosResponse<any>> => {
    try {
      const response = await MarvelApi.get('characters?limit=16&offset=' + ((page - 1) * 16));
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer o GET:', error);
      throw error;
    }
  };
