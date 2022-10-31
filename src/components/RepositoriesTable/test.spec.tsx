import { render, screen } from "@testing-library/react";

import RepositoriesTable from "./RepositoriesTable/index";
import { RepositoriesType } from "./types";

const mockDataRepositories: Array<RepositoriesType> = [
    {
        id: "283",
        name: "repo-name-1",
        description: "something",
        hasStar: true,
    },
    {
        id: "434",
        name: "repo-name-0",
        description: "nothing",
        hasStar: false,
    },
];

describe("<RepositoriesTable /> from UserInfo components", () => {
    it("should render repositories", () => {
        render(<RepositoriesTable repositories={mockDataRepositories} />);

        expect(screen.getAllByText("Compartilhar")).toHaveLength(2);
    });
});
