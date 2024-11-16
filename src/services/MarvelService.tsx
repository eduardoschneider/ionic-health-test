import MarvelApi from '@utils/MarvelAPI';
import { AxiosResponse } from 'axios';

  export const getAllCharacters = async (page: number, name: string, type: any): Promise<AxiosResponse<any>> => {
    try {
      const response = await MarvelApi.get(type + '?limit=16&offset=' + ((page - 1) * 16) + (name != '' ? ('&nameStartsWith=' + name):''));
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer o GET:', error);
      throw error;
    }
  };

  export const getSpecificCharacter = async (id: any, type: any): Promise<AxiosResponse<any>> => {
    try {
      const response = await MarvelApi.get(type + '/' + id);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer o GET:', error);
      throw error;
    }
  };

  export const getAllEvents = async (page: number, name: string): Promise<AxiosResponse<any>> => {
    try {
      const response = await MarvelApi.get('events?limit=16&offset=' + ((page - 1) * 16) + (name != '' ? ('&nameStartsWith=' + name):''));
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer o GET:', error);
      throw error;
    }
  };