import { Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";

/* Components */
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import UserInfo from "./pages/UserInfo";
import PrivateRoute from "./routes/PrivateRoute";
import Error from "./pages/Error";

import LogoutProvider from "./context/LogoutContext";

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PublicRoute restricted>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                path="/home"
                element={
                    <PrivateRoute>
                        <LogoutProvider>
                            <Home />
                        </LogoutProvider>
                    </PrivateRoute>
                }
            />
            <Route
                path="/search"
                element={
                    <PrivateRoute>
                        <Search />
                    </PrivateRoute>
                }
            />
            <Route
                path="/user-info/:username"
                element={
                    <PrivateRoute>
                        <UserInfo />
                    </PrivateRoute>
                }
            />
            <Route
                path="*"
                element={
                    <Error
                        error="404"
                        text="Esta página não existe. 
                Vamos encontrar um lugar melhor para você ir."
                    />
                }
            />
        </Routes>
    );
};

export default App;
