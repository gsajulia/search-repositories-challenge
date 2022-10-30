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
                <img src={hasStar ? I.goldenStar : I.star} />
                <CustomButton buttonType="see-more-button">
                    <span>Compartilhar</span>
                </CustomButton>
            </div>
        </div>
    );
};

export default TableRow;
