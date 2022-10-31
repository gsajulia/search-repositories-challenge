import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header/index";
import FormSection from "./FormSection/index";
import * as D from "./mock.data";

describe("<FormSection /> from login", () => {
    it("should call onChange function on each key pressed", () => {
        render(
            <FormSection
                onChange={D.validUser.onChange}
                login={D.validUser.login}
                error={D.validUser.error}
            />
        );

        const user: HTMLInputElement = screen.getByPlaceholderText(/Usuário/i);
        const password: HTMLInputElement =
            screen.getByPlaceholderText(/Senha/i);

        const userValue = D.validUser.login.user;
        userEvent.type(user, userValue);

        const passwordValue = D.validUser.login.password;
        userEvent.type(password, passwordValue);

        expect(password.value).toBe(userValue);
        expect(user.value).toBe(passwordValue);
        expect(D.validUser.onChange).toHaveBeenCalledTimes(
            userValue.length + passwordValue.length
        );
    });

    it("should throw an error if is an invalid user", () => {
        render(
            <FormSection
                onChange={D.invalidUser.onChange}
                login={D.invalidUser.login}
                error={D.invalidUser.error}
            />
        );

        const error = screen.getByText(
            "Ops, usuário ou senha inválidos. Tente novamente!"
        );
        expect(error).toBeInTheDocument();
    });
});

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
