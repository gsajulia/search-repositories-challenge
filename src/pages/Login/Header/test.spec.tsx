import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("<Header /> from login", () => {
    it("should render the text of header", () => {
        render(<Header />);

        expect.assertions(2);
        const title = screen.getByText("Olá,");
        const subtitle = screen.getByText(
            "Para continuar navegando de forma segura, efetue o login na rede."
        );

        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
    });
});
