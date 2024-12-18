import './styles.scss';
import MarvelLogo from '@assets/marvel-logo.svg';
import Input from '@components/Input'
import Button from '@components/Button';
import { useCookies } from 'react-cookie';
import { handleLogin } from '@services/DummyService';
import { useNavigate } from "react-router-dom";
import React from 'react';
import Loading from '@components/Loading';

//Usuário de teste: 
// michaelw
// michaelwpass

interface LoginForm {
  username: string;
  password: string;
}

const Login: React.FC = () => {

  const navigate = useNavigate();

  const [login, setLogin] = React.useState<LoginForm>({ username: '', password: '' });
  const [terms, setTerms] = React.useState<boolean>(false);
  const [_, setCookie] = useCookies(['username']);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleChange = React.useCallback((key: keyof LoginForm, value: string) => {
    setLogin((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    let response = await handleLogin(login, setIsLoading);
    saveCookies(response);
    navigate('/dashboard');
  };

  const saveCookies = (e: any) => {
    setCookie('username', e.firstName + ' ' + e.lastName, { path: '/' });
  }

  return (
    <div className="container">
      <div className="login-box">
        <img src={MarvelLogo} alt="Logo da Marvel"></img>
        <form className="login-container" onSubmit={(e) => handleSubmit(e)}>
          {
            isLoading ? <Loading></Loading>
              :
              <>
                <Input title="nome de usuário" type="text" value={login.username} onChange={(value) => handleChange('username', value)}></Input>
                <Input title="senha" type="password" value={login.password} onChange={(value) => handleChange('password', value)}></Input>
                <div className="policy-checkbox">
                  <input checked={terms} onChange={(e) => setTerms(e.target.checked)} type="checkbox"></input>
                  <label>Concordo com os <a>termos de uso e políticas de privacidade</a>.</label>
                </div>
                <Button disabled={!terms} type="submit">ENTRAR</Button>
              </>
          }
        </form>
      </div>
    </div>
  );
};

export default Login;