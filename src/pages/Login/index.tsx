import './styles.scss';
import MarvelLogo from '@assets/marvel-logo.svg';
import Input from '@components/Input'
import React from 'react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados de login:', login);
    // TODO: LOGIN
  };

  return (
    <div className="container">
      <div className="login-box">
        <img src={MarvelLogo} alt="Logo da Marvel"></img>
        <form className="login-container" onSubmit={handleSubmit}>
          <Input title="e-mail" value={login.username} onChange={(value) => handleChange('username', value)}></Input>
          <Input title="senha" type="password" value={login.password} onChange={(value) => handleChange('password', value)}></Input>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;