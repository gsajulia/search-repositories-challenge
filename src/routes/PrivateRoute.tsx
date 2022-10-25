import { Navigate } from "react-router-dom";
import { isLogged } from "../utils";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    if (!isLogged()) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;
