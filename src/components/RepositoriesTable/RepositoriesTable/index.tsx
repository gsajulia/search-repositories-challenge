import { FC } from "react";

import TableRow from "../TableRow";

import { RepositoriesTableProps, RepositoriesType } from "./types";

const Repositories: FC<RepositoriesTableProps> = ({ repositories }) => (
    <div className="repositories-table-content">
        {repositories.map(
            ({ id, name, description, hasStar }: RepositoriesType) => (
                <TableRow
                    key={id}
                    name={name}
                    description={description}
                    hasStar={hasStar}
                />
            )
        )}
    </div>
);

export default Repositories;
