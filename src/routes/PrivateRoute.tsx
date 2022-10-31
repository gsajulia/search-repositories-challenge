import { isLogged } from "../utils";
import Error from "../pages/Error";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    if (!isLogged()) {
        return (
            <Error
                error="401"
                text="Esta página não existe. 
                Vamos encontrar um lugar melhor para você ir."
            />
        );
    }

    return children;
};

export default PrivateRoute;
