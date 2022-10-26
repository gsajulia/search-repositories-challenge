import { FC } from "react";
import "./styles.scss";
import { ButtonType } from "./types";

const CustomButton: FC<ButtonType> = ({ buttonType = "", label }) => {
    return <button className={`base-button ${buttonType}`}>{label}</button>;
};

export default CustomButton;
