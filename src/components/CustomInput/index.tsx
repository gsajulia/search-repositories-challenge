import { FC } from "react";
import "./styles.scss";
import { InputType } from "./types";

const CustomInput: FC<InputType> = ({
    id,
    placeholder,
    icon,
    value,
    inputType = "",
    height = 20,
    type = "text",
    onChange,
    error = "",
}) => {
    return (
        <div
            className={`base-input ${inputType} ${error}`}
            id={`${id}-container`}
        >
            <input
                id={id}
                name={id}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                value={value}
            />
            {inputType === "icon-input" && (
                <img width={20} height={height} src={icon} alt="Input icon" />
            )}
        </div>
    );
};

export default CustomInput;
