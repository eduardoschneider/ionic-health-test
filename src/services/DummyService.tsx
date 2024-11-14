import DummyApi from '@utils/DummyAPI';
import { AxiosResponse } from 'axios';

interface LoginData {
  username: string;
  password: string;
}

type AfterCallback = () => void;

export const handleLogin = async (data: LoginData, after: AfterCallback | null): Promise<AxiosResponse<any>> => {
  try {
    const response = await DummyApi.post('/login', data);
    if (after) {
      after();
    }
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer o POST:', error);
    //TODO: MENSAGEM DE ERRO
    throw error;
  }
};
