import { FC } from "react";
import { InputType } from "./types";

const CustomInput: FC<InputType> = ({
    id,
    placeholder,
    icon,
    inputType = "",
}) => {
    return (
        <div className={`base ${inputType}`}>
            <input className="base-input" id={id} placeholder={placeholder} />
            <img src={icon} alt="Input icon" />
        </div>
    );
};

export default CustomInput;
