import User from '@components/User';
import { Link, useLocation } from "react-router-dom";
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
            <div>
                <User/>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Header;