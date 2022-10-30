import { FC, ChangeEvent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";
import * as I from "../../assets/icons";
import CustomButton from "../../components/CustomButton";
import RepositoriesTable from "../../components/RepositoriesTable";

import { getUserRepos } from "../../api/Users";

import { MatchParams, RepositoriesType } from "./types";

const UserInfo: FC = () => {
    const [actualRepositories, setActualRepositories] = useState<
        Array<RepositoriesType> | []
    >([]);
    const [repositories, setRepositories] = useState<
        Array<RepositoriesType> | []
    >([]);

    const params: MatchParams = useParams();

    const getRepos = async () => {
        try {
            const { data } = await getUserRepos(params.username || "");
            let tempRepos: any = [];

            for (let i = 0; i < data.length; i++) {
                if ((data.length < 4 && data.length - 1 === i) || i === 4) {
                    setActualRepositories(tempRepos);
                    return;
                }
                tempRepos.push({
                    id: data[i].id,
                    name: data[i].full_name,
                    description: data[i].description,
                    hasStar: !!data[i].stargazers_count,
                });
            }

            setRepositories(tempRepos);
        } catch (e) {
            console.log(e);
        }
    };

    const viewMore = () => {};

    useEffect(() => {
        getRepos();
    }, []);

    return (
        <div className="user-info-container">
            <div className="user-info-content">
                <div className="user-info-profile">
                    <img alt="profile photo" />

                    <div className="title"></div>
                    <div></div>
                </div>
                <RepositoriesTable
                    repositories={actualRepositories}
                    viewMore={viewMore}
                />
                <div className="user-info-button-container">
                    <CustomButton
                        width="136px"
                        buttonType="see-more-button-rounded"
                    >
                        <>Voltar</>
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
