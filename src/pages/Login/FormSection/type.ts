import { ChangeEvent } from "react";

export interface LoginParam {
    error: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    login: { user: string; password: string };
}
