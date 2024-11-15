import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import './styles.scss';

const BasePage: React.FC = () => {

    return (
        <div className="base-page">
            <div className="base-page-container">
                <Header/>
                <main className="base-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default BasePage;