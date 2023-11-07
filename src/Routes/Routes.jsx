import { createBrowserRouter, } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Features from "../Pages/Features";
import AvailableFoods from "../Pages/AvailableFoods";
import PrivateRoutes from "./PrivateRoutes";
import FoodDeatils from "../Pages/FoodDeatils";
import AddFood from "../Pages/AddFood";
import ManageFood from "./ManageFood";
import UpdateFood from "../components/ui/UpdateFood";
import FoodRequest from "../Pages/FoodRequest";


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
                path: '/features',
                element: <Features></Features>,
                // loader: () => fetch('http://localhost:5000/api/v1/foods')

            },
            {
                path: '/addFood',
                element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>,
                // loader: () => fetch('http://localhost:5000/api/v1/foods')

            },
            {
                path: '/manageMyFoods',
                element: <PrivateRoutes><ManageFood></ManageFood></PrivateRoutes>,
                

            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><UpdateFood></UpdateFood></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/foods/${params.id}`)
            },

            {
                path: '/availableFoods',
                element: <PrivateRoutes> <AvailableFoods /></PrivateRoutes>
            },

            {
                path: '/foodDetails/:id',
                element: <PrivateRoutes> <FoodDeatils /></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/foods/${params.id}`)
            },
            {
                path: '/myFoodRequest',
                element: <PrivateRoutes> <FoodRequest /></PrivateRoutes>,
                // loader: () => fetch('http://localhost:5000/api/v1/user/request')
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