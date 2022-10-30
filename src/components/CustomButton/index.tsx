import { FC } from "react";
import "./styles.scss";
import { ButtonType } from "./types";

const CustomButton: FC<ButtonType> = ({
    buttonType = "",
    children,
    type = "button",
    onClick,
    width = "100%",
}) => {
    return (
        <button
            style={{ width: width }}
            className={`base-button ${buttonType}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CustomButton;
