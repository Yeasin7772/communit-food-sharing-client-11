import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import animations from '../../public/animations.json'
import Lottie from "lottie-react";
const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <div className="flex justify-center items-center"><Lottie animationData={animations}> </Lottie></div>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;