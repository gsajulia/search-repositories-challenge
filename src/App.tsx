import { Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";

/* Components */
import Login from "./pages/Login";

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
            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    );
};

export default App;
