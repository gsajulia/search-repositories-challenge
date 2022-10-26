import "./styles.scss";
import * as Icon from "../../assets/icons";
import * as Image from "../../assets/images";

import { useState, FC, ChangeEvent } from "react";

import { useNavigate } from "react-router-dom";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { LoginParam } from "./type";

const Header: FC = () => (
    <div className="header-section">
        <h3>Olá,</h3>
        <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
    </div>
);

const LoginSection: FC<LoginParam> = ({ onChange, login, error }) => (
    <div className="login-section">
        <h5>Login</h5>
        <CustomInput
            id="input-user-icon"
            inputType="icon-input"
            placeholder="Usuário"
            value={login.user}
            onChange={onChange}
            icon={Icon.userIcon}
            error={error && "login-error"}
        />
        <CustomInput
            id="input-password-icon"
            inputType="icon-input"
            placeholder="Senha"
            type="password"
            value={login.password}
            onChange={onChange}
            height={25}
            icon={Icon.passwordIcon}
            error={error && "login-error"}
        />

        {error && (
            <div className="login-error-message">
                Ops, usuário ou senha inválidos. Tente novamente!
            </div>
        )}
    </div>
);

const Login: FC = () => {
    const [login, setLogin] = useState({ user: "", password: "" });
    const [error, setError] = useState(false);

    let navigate = useNavigate();

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const key = name.split("-");
        setLogin((prev) => {
            return { ...prev, [key[1]]: value };
        });
    };

    const onSubmit = () => {
        if (login.user === "admin" && login.password === "admin")
            navigate("/home");
        else setError(true);
    };

    return (
        <div className="login-container">
            <section className="login-info">
                <div className="content">
                    <Header />
                    <LoginSection
                        error={error}
                        onChange={onChangeInput}
                        login={login}
                    />
                    <CustomButton
                        buttonType="submit"
                        label="Continuar"
                        onClick={onSubmit}
                    />
                </div>
            </section>

            <section>
                <div className="compass-logo">
                    <img src={Icon.compassLogo} alt="Compass Logo" />
                </div>

                <img
                    src={Image.loginBanner}
                    alt="Banner with colorful notebook"
                    className="banner-img"
                />
            </section>
        </div>
    );
};

export default Login;
