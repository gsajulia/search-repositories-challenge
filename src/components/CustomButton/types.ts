export interface ButtonType {
    buttonType?: string;
    children: JSX.Element;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    width?: string;
}
