import { FC } from "react";
import * as I from "../../assets/icons";
import "./styles.scss";

const Header: FC = () => {
    return (
        <header className="header-container">
            <img src={I.compassLogoBlack} alt="Compass Logo" />
            <h1>11:26</h1>
            <div>
                <div className="climate-text">Passo Fundo - RS</div>
                <div className="climate-container">
                    <img src={I.climate} alt="Compass Logo" />
                    <div className="climate-text-number">22º</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
