import { FC, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./styles.scss";
import CustomButton from "../../components/CustomButton";
import RepositoriesTable from "../../components/RepositoriesTable";

import { getUserRepos, getUserBySearch, getStarredRepo } from "../../api/Users";

import { MatchParams, RepositoriesType, UserType } from "./types";

const UserInfo: FC = () => {
    const [actualRepositories, setActualRepositories] = useState<
        Array<RepositoriesType> | []
    >([]);
    const [repositories, setRepositories] = useState<
        Array<RepositoriesType> | []
    >([]);
    const [starredRepositories, setStarredRepositories] = useState<
        Array<RepositoriesType> | []
    >([]);
    const [user, setUser] = useState<UserType | null>(null);

    const navigate = useNavigate();
    const params: MatchParams = useParams();

    const getRepos = async () => {
        try {
            const { data } = await getUserRepos(params.username || "");
            let tempRepos: any = [];
            for (let i = 0; i < data.length; i++) {
                if (i === 4) {
                    setActualRepositories([...tempRepos]);
                }
                tempRepos.push({
                    id: data[i].id,
                    name: data[i].full_name,
                    description: data[i].description,
                    hasStar: !!data[i].stargazers_count,
                });
            }

            if (data.length < 4) setActualRepositories(tempRepos);
            setRepositories(tempRepos);
        } catch (e) {
            console.log(e);
        }
    };

    const getUserInfo = async () => {
        try {
            const { data } = await getUserBySearch(params.username || "");

            const user: UserType = {
                id: data.node_id,
                name: data.name,
                description: data.bio,
                img: data.avatar_url,
            };
            setUser(user);
        } catch (e) {
            console.log(e);
        }
    };

    const getStarredRepositories = async () => {
        try {
            const { data } = await getStarredRepo(params.username || "");
            let tempRepos: any = [];

            for (let i = 0; i < data.length; i++) {
                tempRepos.push({
                    id: data[i].id,
                    name: data[i].full_name,
                    description: data[i].description,
                    hasStar: !!data[i].stargazers_count,
                });
            }
            setStarredRepositories(tempRepos);
        } catch (e) {
            console.log(e);
        }
    };

    const viewMore = (tabs: number) => {
        if (tabs === 0) setActualRepositories(repositories);
        else setActualRepositories(starredRepositories);
    };

    useEffect(() => {
        getRepos();
        getStarredRepositories();
        getUserInfo();
    }, []);

    return (
        <div className="user-info-container">
            <div className="user-info-content">
                <div className="user-info-button-container">
                    <CustomButton
                        width="136px"
                        buttonType="see-more-button-rounded"
                        onClick={() => navigate("/search")}
                    >
                        <>Voltar</>
                    </CustomButton>
                </div>
                <div className="user-info-left-section">
                    <div className="user-info-profile">
                        <img src={user?.img} alt="profile photo" />
                        <div className="user-info-profile-text">
                            <div className="title">{user?.name}</div>
                            <div className="description">
                                {user?.description}
                            </div>
                        </div>
                    </div>
                    <RepositoriesTable
                        starredRepositories={starredRepositories}
                        repositories={repositories}
                        viewMore={viewMore}
                        setActualRepositories={setActualRepositories}
                        actualRepositories={actualRepositories}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
