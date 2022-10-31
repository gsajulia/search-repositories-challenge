import { FC } from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../utils";

const MobileFooter: FC = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer-mobile">
            <div className="button-links-container">
                <div
                    onClick={() => {
                        logout();
                        navigate("/", { replace: true });
                    }}
                    className="primary-link"
                >
                    <Link to="">Logout</Link>
                </div>
                <div className="secondary-link">
                    <Link to="/search">Acessar Busca</Link>
                </div>
            </div>
        </footer>
    );
};

export default MobileFooter;
