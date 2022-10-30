import { FC } from "react";
import * as I from "../../assets/icons";
import "./styles.scss";

const Header: FC = () => {
    return (
        <header className="header-container">
            <img height={86} width={300} src={I.compassLogoBlack} alt="Compass Logo" />
            <div className="header-time">
                <h1>11:26</h1>
                <div>terça-feira, 17 de março de 2020</div>
            </div>
            <div>
                <div className="climate-text">Passo Fundo - RS</div>
                <div className="climate-container">
                    <img src={I.climate} alt="climate cloudy icon" />
                    <div className="climate-text-number">22º</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
