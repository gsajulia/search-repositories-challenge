export interface ButtonType {
    buttonType: string;
    label: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}
