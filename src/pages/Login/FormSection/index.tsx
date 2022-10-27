import { FC } from "react";

import * as Icon from "../../../assets/icons";
import CustomInput from "../../../components/CustomInput";

import { LoginParam } from "./type";

const FormSection: FC<LoginParam> = ({ onChange, login, error }) => (
    <div className="login-section">
        <h5>Login</h5>
        <CustomInput
            id="input-user-icon"
            inputType="icon-input"
            placeholder="Usuário"
            value={login.user}
            onChange={onChange}
            icon={Icon.userIcon}
            error={error ? "login-error" : ""}
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
            error={error ? "login-error" : ""}
        />

        {error && (
            <div className="login-error-message">
                {"Ops, usuário ou senha inválidos. Tente novamente!"}
            </div>
        )}
    </div>
);

export default FormSection;
