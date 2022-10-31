import { FC } from "react";

import TableRow from "../TableRow";

import "./styles.scss";
import { RepositoriesTableProps, RepositoriesType } from "./types";

const Repositories: FC<RepositoriesTableProps> = ({ repositories }) => (
    <div className="repositories-table-content">
        {repositories.map(
            ({ id, name, description, hasStar }: RepositoriesType, idx) => (
                <>
                    <TableRow
                        key={id}
                        name={name}
                        description={description}
                        hasStar={hasStar}
                    />
                    {idx !== repositories.length - 1 && (
                        <hr className="table-divider" />
                    )}
                </>
            )
        )}
    </div>
);

export default Repositories;
