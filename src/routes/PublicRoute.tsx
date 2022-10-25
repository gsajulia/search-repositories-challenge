import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { isLogged } from "../utils";

interface Props {
    children: JSX.Element;
    restricted?: boolean;
}

const PublicRoute = ({ children, restricted }: Props) => {
    if (isLogged() && restricted) return <Navigate to="/home" replace />;

    return children;
};

export default PublicRoute;
