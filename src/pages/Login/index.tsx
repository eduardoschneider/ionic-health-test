import './styles.scss';
import MarvelLogo from '@assets/marvel-logo.svg';
import Input from '@components/Input'
import Button from '@components/Button';
import { handleLogin } from '@services/DummyService';
import React from 'react';

//Usuário de teste: 
// michaelw
// michaelwpass

interface LoginForm {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [login, setLogin] = React.useState<LoginForm>({ username: '', password: '' });

  const handleChange = (key: keyof LoginForm, value: string) => {
    setLogin((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados de login:', login);
    handleLogin(login, null);
  };

  return (
    <div className="container">
      <div className="login-box">
        <img src={MarvelLogo} alt="Logo da Marvel"></img>
        <form className="login-container" onSubmit={(e) => handleSubmit(e)}>
          <Input title="nome de usuário" type="text" value={login.username} onChange={(value) => handleChange('username', value)}></Input>
          <Input title="senha" type="password" value={login.password} onChange={(value) => handleChange('password', value)}></Input>
          <Button type="submit">ENTRAR</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;