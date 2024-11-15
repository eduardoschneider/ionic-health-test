import User from '@components/User';
import { Link, useLocation } from "react-router-dom";
import MarvelLogo from '@assets/marvel-logo.svg';
import './styles.scss';

const Header: React.FC = () => {

    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="header">
            <div className="options">
                <Link to="/dashboard" className={isActive("/dashboard") ? "highlight" : ""}>Home</Link>
                <Link to="/dashboard/characters" className={isActive("/dashboard/characters") ? "highlight" : ""}>Personagens</Link>
                <Link to="/dashboard/events" className={isActive("/dashboard/events") ? "highlight" : ""}>Eventos</Link>
            </div>
            <img className="marvel-logo" src={MarvelLogo}></img>
            <div>
                <User/>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Header;