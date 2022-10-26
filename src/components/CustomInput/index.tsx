import { FC } from "react";
import "./styles.scss";
import { InputType } from "./types";

const CustomInput: FC<InputType> = ({
    id,
    placeholder,
    icon,
    inputType = "",
    height = 20,
}) => {
    return (
        <div className={`base-input ${inputType}`} id={`${id}-container`}>
            <input id={id} placeholder={placeholder} />
            {inputType === "icon-input" && (
                <img width={20} height={height} src={icon} alt="Input icon" />
            )}
        </div>
    );
};

export default CustomInput;
