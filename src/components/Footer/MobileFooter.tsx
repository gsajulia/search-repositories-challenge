import { FC } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const MobileFooter: FC = () => {
    return (
        <footer className="footer-mobile">
            <div className="button-links-container">
                <div className="primary-link">
                    <Link to="">Logout</Link>
                </div>
                <div className="secondary-link">
                    <Link to="">Acessar Busca</Link>
                </div>
            </div>
        </footer>
    );
};

export default MobileFooter;
