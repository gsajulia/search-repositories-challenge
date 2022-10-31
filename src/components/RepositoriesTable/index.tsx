import { FC, useState } from "react";

import "./styles.scss";
import * as I from "../../assets/icons";

import Repositories from "./RepositoriesTable";
import { RepositoriesTableProps, RepositoriesType } from "./types";

const RepositoriesTable: FC<RepositoriesTableProps> = ({
    starredRepositories,
    repositories,
    viewMore,
    setActualRepositories,
    actualRepositories,
}) => {
    const [showMore, setShowMore] = useState(true);
    const [tabs, setTabs] = useState(0);

    const formattRepositories = (repo: Array<RepositoriesType>) => {
        let tempRepos: any = [];
        for (let i = 0; i < repo.length; i++) {
            if (i >= 4) {
                return tempRepos;
            }
            tempRepos.push({
                id: repo[i].id,
                name: repo[i].name,
                description: repo[i].description,
                hasStar: !!repo[i].hasStar,
            });
        }
    };

    const returnTwoDigits = (length: number) => {
        if (length < 10) return `0${length}`;
        else return length;
    };

    return (
        <div className="repositories-table-container">
            <div className="repositories-table-tabs">
                <div
                    onClick={() => {
                        setTabs(0);
                        setShowMore(true);
                        setActualRepositories(
                            formattRepositories(repositories)
                        );
                    }}
                    className={tabs === 0 ? "active-tab-border" : "content"}
                >
                    Repositórios
                    <span>{returnTwoDigits(repositories.length)}</span>
                </div>

                <div
                    onClick={() => {
                        setTabs(1);
                        setShowMore(true);
                        setActualRepositories(
                            formattRepositories(starredRepositories)
                        );
                    }}
                    className={tabs === 1 ? "active-tab-border" : "content"}
                >
                    Favoritos
                    <span>{returnTwoDigits(starredRepositories.length)}</span>
                </div>
            </div>
            <div className="repositories-table">
                <Repositories repositories={actualRepositories} />
            </div>

            {showMore && (
                <div
                    className="repositories-show-more"
                    onClick={() => {
                        viewMore();
                        setShowMore(false);
                    }}
                >
                    Ver mais repositórios
                    <img src={I.downArrow} alt="down arrow" />
                </div>
            )}
        </div>
    );
};

export default RepositoriesTable;
