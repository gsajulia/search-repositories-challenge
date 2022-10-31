import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CustomInput from "./index";

describe("<CustomButton /> from components", () => {
    it("should call onChange function on each key pressed", () => {
        const fn = jest.fn();
        render(
            <CustomInput
                id="testing-input"
                onChange={fn}
                value="testando"
                placeholder="testing"
            />
        );

        const input: HTMLInputElement = screen.getByPlaceholderText(/testing/i);
        const value = "testando";

        userEvent.type(input, value);

        expect(input.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(value.length);
    });
});
