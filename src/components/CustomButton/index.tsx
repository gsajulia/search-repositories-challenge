import { FC } from "react";
import { ButtonType } from "./types";

const CustomButton: FC<ButtonType> = ({ buttonType = "", label }) => {
    return <button className={`base ${buttonType}-button`}>{label}</button>;
};

export default CustomButton;
