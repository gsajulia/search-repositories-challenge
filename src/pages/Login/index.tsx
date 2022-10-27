import "./styles.scss";
import * as Icon from "../../assets/icons";
import * as Image from "../../assets/images";

import { useState, FC, ChangeEvent } from "react";

import { useNavigate } from "react-router-dom";

import CustomButton from "../../components/CustomButton";
import Header from "./Header";
import FormSection from "./FormSection";

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
                    <FormSection
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
