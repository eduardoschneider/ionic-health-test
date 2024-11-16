import MarvelApi from '@utils/MarvelAPI';
import { AxiosResponse } from 'axios';

  export const getAll = async (page: number, name: string, modified:string, type: any): Promise<AxiosResponse<any>> => {
    try {
      const response = await MarvelApi.get(type + '?limit=16&offset=' +
        ((page - 1) * 16) +
        (name != '' ? ('&nameStartsWith=' + name):'') +
        (modified != '' ? ('&modifiedSince=' + modified):'')
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer o GET:', error);
      throw error;
    }
  };

  export const getSpecific = async (id: any, type: any): Promise<AxiosResponse<any>> => {
    try {
      const response = await MarvelApi.get(type + '/' + id);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer o GET:', error);
      throw error;
    }
  };