import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Footer from "./index";

const duration = 600000; //this mock need to be the same as LogoutContext
describe("<Footer /> from components", () => {
    it("should go to login when the timer finish", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
        const homeText = screen.getByText("Application refresh in");
        expect(homeText).toBeInTheDocument();
        setTimeout(() => {
            console.log("Time's up -- stop!");
            expect(homeText).not.toBeInTheDocument();

            const login = screen.getByText("Login");
            expect(login).toBeInTheDocument();
        }, duration);
    });
});
