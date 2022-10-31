import { FC, ChangeEvent, useState } from "react";

import "./styles.scss";
import * as I from "../../assets/icons";

import BannerSectionLayout from "../../components/BannerSectionLayout";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { getUserBySearch } from "../../api/Users";
import UserCard from "../../components/UserCard";

import { UserType } from "./types";

const Search: FC = () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState<Array<UserType> | [] | null>([]);

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setSearch(value);
    };

    const getUser = async () => {
        try {
            const result = await getUserBySearch(search);

            const user = {
                id: result.data.node_id,
                name: result.data.name,
                description: result.data.bio,
                img: result.data.avatar_url,
            };

            setUsers([user]);
        } catch (e) {
            setUsers(null);
        }
    };

    const onClickSearch = () => {
        if (!search) setUsers([]);
        getUser();
    };

    return (
        <div className="search-container">
            <BannerSectionLayout
                rightSection="35%"
                leftSection="65%"
                mobileLogo={false}
            >
                <div className="search-left-section">
                    <div className="search-content">
                        <div className="search-header">
                            <h3>Busca</h3>
                            <p>
                                Para encontrar o usuário desejado digite seu
                                nome abaixo.
                            </p>
                        </div>

                        <div className="search-section">
                            <CustomInput
                                id="input-search-repositories"
                                value={search}
                                onChange={onChangeInput}
                                placeholder="Ex.: Thauany"
                            />
                            <CustomButton
                                buttonType="submit"
                                onClick={onClickSearch}
                                width="200px"
                            >
                                <div className="search-button-content">
                                    <span>Buscar</span>
                                    <img src={I.search} alt="search icon" />
                                </div>
                            </CustomButton>
                        </div>

                        <div>
                            {users === null ? (
                                <div>
                                    Oops! Algo deu errado com a sua pesquisa.
                                </div>
                            ) : users.length ? (
                                users.map(
                                    ({
                                        id,
                                        name,
                                        description,
                                        img,
                                    }: UserType) => (
                                        <UserCard
                                            key={id}
                                            name={name}
                                            description={description}
                                            img={img}
                                            userUrl={search}
                                        />
                                    )
                                )
                            ) : null}
                        </div>
                    </div>
                </div>
            </BannerSectionLayout>
        </div>
    );
};

export default Search;
