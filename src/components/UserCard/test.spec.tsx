import { render, screen } from "@testing-library/react";
import UserCard from "./index";
import { UserCardProps } from "./types";
import { BrowserRouter } from "react-router-dom";
const mockDataCard: UserCardProps = {
    name: "Lucas",
    description: "Software Engineer",
    img: "src/img",
    userUrl: "github/lucas",
};

describe("<UserCard /> from search", () => {
    it("should render user info", () => {
        render(
            <BrowserRouter>
                <UserCard
                    name={mockDataCard.name}
                    description={mockDataCard.description}
                    img={mockDataCard.img}
                    userUrl={mockDataCard.userUrl}
                />
            </BrowserRouter>
        );

        expect(screen.getByText(mockDataCard.name)).toBeInTheDocument();
        expect(
            screen.getByRole("img", { name: "user profile" })
        ).toHaveAttribute("src", "src/img");
    });
});
