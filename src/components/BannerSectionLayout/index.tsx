import "./styles.scss";
import * as Icon from "../../assets/icons";

import { useNavigate } from "react-router-dom";
import { FC } from "react";

import { BannerSectionParam } from "./type";

const BannerSectionLayout: FC<BannerSectionParam> = ({
    children,
    mobileLogo = true,
    rightSection = "50%",
    leftSection = "50%",
}) => {
    const navigate = useNavigate();
    return (
        <div className="banner-container">
            <div
                onClick={() => navigate("/home", { replace: true })}
                className={mobileLogo ? "mobile-logo" : "no-mobile-logo"}
            >
                <img src={Icon.compassLogo} alt="Compass Logo" />
            </div>

            <section style={{ width: leftSection }}>{children}</section>

            <section
                style={{ width: rightSection }}
                className="mobile-banner-section"
            >
                <div
                    onClick={() => navigate("/home", { replace: true })}
                    className="banner-img"
                >
                    <img src={Icon.compassLogo} alt="Compass Logo" />
                </div>
            </section>
        </div>
    );
};

export default BannerSectionLayout;
