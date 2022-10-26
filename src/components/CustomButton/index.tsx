import { FC } from "react";
import "./styles.scss";
import { ButtonType } from "./types";

const CustomButton: FC<ButtonType> = ({
    buttonType = "",
    label,
    type = "button",
    onClick,
}) => {
    return (
        <button
            className={`base-button ${buttonType}`}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default CustomButton;
