import { FC } from "react";

import TableRow from "../TableRow";

import { RepositoriesTableProps } from "./types";

const Repositories: FC<RepositoriesTableProps> = ({ repositories }) => (
    <div className="repositories-table-content">
        {repositories.map(({ name, description, hasStar }: any) => (
            <TableRow name={name} description={description} hasStar={hasStar} />
        ))}
    </div>
);

export default Repositories;
