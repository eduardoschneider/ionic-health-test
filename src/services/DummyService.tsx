import DummyApi from '@utils/DummyAPI';
import { AxiosResponse } from 'axios';
import Swal from 'sweetalert2'

interface LoginData {
  username: string;
  password: string;
}

export const handleLogin = async (data: LoginData, fallback: any): Promise<AxiosResponse<any>> => {
  try {
    const response = await DummyApi.post('/login', data);
    return response.data;
  } catch (error: any) {
    fallback(false);
    Swal.fire({
      title: 'Erro',
      text: 'Usuário ou senha incorretos.',
      icon: 'error',
      confirmButtonText: 'Tentar novamente'
    })
    throw error;
  }
};
