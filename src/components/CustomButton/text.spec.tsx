import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CustomButtom from "./index";

describe("<CustomButton /> from components", () => {
    it("should call function on button click", () => {
        const fn = jest.fn();
        render(
            <CustomButtom onClick={fn}>
                <>Confirmar</>
            </CustomButtom>
        );

        const button = screen.getByText("Confirmar");
        userEvent.click(button);

        expect(fn).toHaveBeenCalled();
    });
});
