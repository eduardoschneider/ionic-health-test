import './styles.scss';
import Hero from '@assets/superhero.png';
import Logout from '@assets/log-out.png';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

const User: React.FC = () => {

    const navigate = useNavigate();

    const [cookie, _, removeCookie] = useCookies(["username"]);

    const handleRemoveCookie = () => {
        removeCookie("username", { path: '/' });
        navigate('/');
      };

    return (
        <div className="user">
            <img className="picture" src={Hero} alt="Perfil de Herói"></img>
            <span><a>Bem-vindo,</a>
                <br />
                <strong className="name">{cookie.username}</strong>
            </span>
            <a onClick={() => handleRemoveCookie()} className="logout">
                <img src={Logout} alt="Botão de sair"></img>
            </a>
        </div>
    );
};

export default User;