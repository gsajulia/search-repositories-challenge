import "./styles.scss";
import * as Icon from "../../assets/icons";
import * as Image from "../../assets/images";

import { useState, FC, ChangeEvent } from "react";

import { useNavigate } from "react-router-dom";

import CustomButton from "../../components/CustomButton";
import Header from "./Header";
import FormSection from "./FormSection";
import BannerSectionLayout from "../../components/BannerSectionLayout";

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
        if (login.user === "admin" && login.password === "admin") {
            navigate("/home");
            localStorage.setItem("user",JSON.stringify(login.user));
        }
        else setError(true);
    };

    return (
        <div className="login-container">
            <BannerSectionLayout>
                <div className="login-left-section">
                    <div className="content">
                        <Header />
                        <FormSection
                            error={error}
                            onChange={onChangeInput}
                            login={login}
                        />
                        <CustomButton buttonType="submit" onClick={onSubmit}>
                            <>Continuar</>
                        </CustomButton>
                    </div>
                </div>
            </BannerSectionLayout>
        </div>
    );
};

export default Login;
