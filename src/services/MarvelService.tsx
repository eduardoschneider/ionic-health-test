import MarvelApi from '@utils/MarvelAPI';
import { AxiosResponse } from 'axios';

  export const getAllCharacters = async (page: number, name: string): Promise<AxiosResponse<any>> => {
    try {
      const response = await MarvelApi.get('characters?limit=16&offset=' + ((page - 1) * 16) + (name != '' ? ('&nameStartsWith=' + name):''));
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer o GET:', error);
      throw error;
    }
  };

  export const getSpecificCharacter = async (id: any): Promise<AxiosResponse<any>> => {
    try {
      const response = await MarvelApi.get('characters/' + id);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer o GET:', error);
      throw error;
    }
  };