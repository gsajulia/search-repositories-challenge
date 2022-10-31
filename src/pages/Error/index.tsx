import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { useState, FC, ChangeEvent } from "react";
import CustomButton from "../../components/CustomButton";
import { isLogged } from "../../utils";

interface ErrorType {
    error: string;
    text: string;
}

const Error: FC<ErrorType> = ({ error, text }) => {
    const navigate = useNavigate();

    return (
        <div className="error-container">
            <h3>{error}</h3>
            <p>{text}</p>
            <CustomButton
                buttonType="submit"
                onClick={() => {
                    if (isLogged()) navigate("/home", { replace: true });
                    else navigate("/", { replace: true });
                }}
                width="379px"
            >
                <>Voltar para página inicial</>
            </CustomButton>
        </div>
    );
};

export default Error;
