import { FC, ChangeEvent, useState, useEffect } from "react";

import "./styles.scss";
import * as I from "../../assets/icons";
import CustomButton from "../CustomButton";

import { UserCardProps } from "./types";

const UserCard: FC<UserCardProps> = ({ name, description, img }) => (
    <div className="user-card-container">
        <div className="user-info">
            <img src={img} alt="user profile" />
            <div className="user-card-title">
                <div>{name}</div>
                <div className="description">{description}</div>
            </div>
        </div>

        <CustomButton width="149px" buttonType="see-more-button">
            <>VER MAIS</>
        </CustomButton>
    </div>
);

export default UserCard;
