import './styles.scss';
import Hero from '@assets/superhero.png';
import Logout from '@assets/log-out.png';
import { useCookies } from 'react-cookie';

const User: React.FC = () => {

    const [cookie, setCookie, removeCookie] = useCookies(["username"]);

    const handleRemoveCookie = () => {
        removeCookie("username"); // Remove o cookie "user"
      };

    return (
        <div className="user">
            <img className="picture" src={Hero} alt="Perfil de Herói"></img>
            <span><a>Bem-vindo,</a>
                <br />
                <strong>{cookie.username}</strong>
            </span>
            <a href="/" onClick={() => handleRemoveCookie()} className="logout">
                <img src={Logout} alt="Botão de sair"></img>
            </a>
        </div>
    );
};

export default User;