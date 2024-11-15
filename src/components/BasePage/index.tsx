import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "@components/Header";
import './styles.scss';

const BasePage: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="base-page">
            <div className="base-page-container">
                <Header/>
                <main>
                    <Outlet /> {/* Renderiza UserList ou UserProfile aqui */}
                </main>
            </div>
        </div>
    );
};

export default BasePage;