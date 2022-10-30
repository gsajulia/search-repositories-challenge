import { FC, ChangeEvent, useState, useEffect } from "react";

import "./styles.scss";
import Repositories from "./RepositoriesTable";
import { RepositoriesTableProps } from "./types";

const RepositoriesTable: FC<RepositoriesTableProps> = ({
    repositories,
    viewMore,
}) => {
    return (
        <div className="repositories-table-container">
            <div className="repositories-table-tabs"></div>
            <div className="repositories-table">
                <Repositories repositories={repositories} />
            </div>
        </div>
    );
};

export default RepositoriesTable;
