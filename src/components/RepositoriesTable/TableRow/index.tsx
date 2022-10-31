import { FC, ChangeEvent, useState, useEffect } from "react";

import "./styles.scss";
import * as I from "../../../assets/icons";

import { TableRowProps } from "./types";
import CustomButton from "../../CustomButton";

const TableRow: FC<TableRowProps> = ({ name, description, hasStar }) => {
    return (
        <div className="repositories-table-row">
            <div className="left-column">
                <div className="title">{name}</div>
                <div className="subtitle">{description}</div>
            </div>

            <div className="right-column">
                <img className="star" src={hasStar ? I.goldenStar : I.star} />
                <CustomButton buttonType="see-more-button">
                    <div className="repositories-button-share">
                        <span>Compartilhar</span>
                        <img className="share" src={I.share} alt="share icon" />
                    </div>
                </CustomButton>
            </div>
        </div>
    );
};

export default TableRow;
