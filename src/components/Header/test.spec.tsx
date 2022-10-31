import { render } from "@testing-library/react";

import Header from "./index";

const mockDate = new Date().toLocaleString("pt-br", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
});
const mockHour = new Date().toLocaleTimeString("pt-br", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
});

describe("<Header /> from home page", () => {
    it("should show right hour and day", () => {
        const { container } = render(<Header />);
        const date = container.querySelector(".header-time div");
        const time = container.querySelector(".header-time h1");
        expect(date).toBeInTheDocument();
        expect(date).toHaveTextContent(mockDate);

        expect(time).toBeInTheDocument();
        expect(time).toHaveTextContent(mockHour);
    });
});
