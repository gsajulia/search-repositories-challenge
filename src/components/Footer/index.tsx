import { FC } from "react";
import { Link } from "react-router-dom"
import * as I from "../../assets/icons";
import "./styles.scss";

const Footer: FC = () => {
    return <footer className="footer-container">
        <section className="begin-section">
            Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
        </section>
        <div className="divider"/>
        <section className="end-section">
            <div className="refresh-text">
                <div>Application refresh in</div>
                <div className="seconds-text">600 <span>seconds</span></div>
            </div>

            <div className="button-links-container">
                <div className="secondary-link">
                    <Link to="">
                        Acessar Busca
                    </Link>
                </div>
                <div className="primary-link">
                    <Link to="">
                        Logout
                    </Link>
                </div>
            </div>
        </section>
    </footer>;
};

export default Footer;
