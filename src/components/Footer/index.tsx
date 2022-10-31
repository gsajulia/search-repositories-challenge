import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../utils";
import "./styles.scss";

import { useLogout } from "../../context/LogoutContext";

const Footer: FC = () => {
    const { timer } = useLogout();
    const navigate = useNavigate();

    return (
        <footer className="footer-container">
            <section className="begin-section">
                <p>
                    Essa janela do navegador é usada para manter sua sessão de
                    autenticação ativa. Deixe-a aberta em segundo plano e abra
                    uma nova janela para continuar a navegar.
                </p>
            </section>
            <div className="divider" />
            <section className="end-section">
                <div className="refresh-text">
                    <div>Application refresh in</div>
                    <div className="seconds-text">
                        {timer / 1000}
                        <div>seconds</div>
                    </div>
                </div>

                <div className="button-links-container">
                    <div className="secondary-link">
                        <Link to="/search">Acessar Busca</Link>
                    </div>
                    <div
                        onClick={() => {
                            logout();
                            navigate("/", { replace: true });
                        }}
                        className="primary-link"
                    >
                        <Link to="">Logout</Link>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
