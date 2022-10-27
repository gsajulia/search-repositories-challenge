import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./index";
import "@testing-library/jest-dom";

describe("<Header /> from login", () => {
    it("should render the button with the text of the house", () => {
        render(<Header />);

        const title = screen.getByText("Olá,");
        expect(title).toBeInTheDocument();
    });
});
