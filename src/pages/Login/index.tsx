import "./styles.scss";
import * as Icon from "../../assets/icons";
import * as Image from "../../assets/images";

import { FC } from "react";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const Header: FC = () => (
    <div className="header-section">
        <h3>Olá,</h3>
        <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
    </div>
);

const LoginSection: FC = () => (
    <div className="login-section">
        <h4>Login</h4>
        <CustomInput
            id="input-user-icon"
            inputType="icon-input"
            placeholder="User"
            icon={Icon.userIcon}
        />
        <CustomInput
            id="input-password-icon"
            inputType="icon-input"
            placeholder="Password"
            icon={Icon.passwordIcon}
        />
    </div>
);

const Login: FC = () => {
    return (
        <div className="login-container">
            <section className="login-info">
                <div>
                    <Header />
                    <LoginSection />
                    <CustomButton buttonType="submit" label="Continuar" />
                </div>
            </section>

            <section>
                <img
                    src={Icon.compassLogo}
                    alt="Compass Logo"
                    className="compass-logo"
                />
                <div>
                    <img
                        src={Image.loginBanner}
                        alt="Banner with colorful notebook"
                        className="banner-img"
                    />
                </div>
            </section>
        </div>
    );
};

export default Login;
