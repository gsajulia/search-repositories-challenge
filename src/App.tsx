import { Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";

/* Components */
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                path="/home"
                element={
                    <PublicRoute>
                        <Home />
                    </PublicRoute>
                }
            />
            <Route
                path="/search"
                element={
                    <PublicRoute>
                        <Search />
                    </PublicRoute>
                }
            />
            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    );
};

export default App;
