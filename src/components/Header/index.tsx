import { FC } from "react";
import * as I from "../../assets/icons";
import "./styles.scss";

const Header: FC = () => {
    return (
        <div className="header-container">
            <img src={I.compassLogoBlack} alt="Compass Logo" />
            <div>time</div>
            <div>climate</div>
        </div>
    );
};

export default Header;
