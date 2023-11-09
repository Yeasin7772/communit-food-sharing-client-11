import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import anim from '../../public/animations.json'
import Lottie from 'lottie-react'


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <div className=" flex justify-center items-center w-full "><Lottie  animationData={anim}></Lottie></div>
        // return <progress className="progress w-full"></progress>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;