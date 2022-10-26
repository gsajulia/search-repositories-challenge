import { ChangeEvent } from "react";
export interface InputType {
    inputType: string;
    id: string;
    placeholder: string;
    icon: string;
    height?: number;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}
