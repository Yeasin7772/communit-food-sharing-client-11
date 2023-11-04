import { createBrowserRouter, } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";

const Routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element:<MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]

    }
])

export default Routes;