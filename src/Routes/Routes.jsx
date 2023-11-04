import { createBrowserRouter, } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../components/Login";
import Register from "../components/Register";

const Routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]

    }
])

export default Routes;