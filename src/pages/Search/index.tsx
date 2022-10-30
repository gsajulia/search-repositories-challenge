import { FC, ChangeEvent, useState, useEffect } from "react";

import "./styles.scss";
import * as I from "../../assets/icons";
import BannerSectionLayout from "../../components/BannerSectionLayout";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const Search: FC = () => {
    const [search, setSearch] = useState("");

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setSearch(value);
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
                            <CustomButton buttonType="submit" width={"200px"}>
                                <div className="search-button-content">
                                    Buscar
                                    <img src={I.search} alt="search icon" />
                                </div>
                            </CustomButton>
                        </div>

                        <div></div>
                    </div>
                </div>
            </BannerSectionLayout>
        </div>
    );
};

export default Search;
