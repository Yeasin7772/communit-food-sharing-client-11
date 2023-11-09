import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { googleLogin, logIn } = useAuth()
    const navigate = useNavigate()

    const location = useLocation()
    console.log('use location', location);



    const handelGoogle = () => {
        googleLogin()
        navigate(location?.state ? location.state : '/')
    }


    const handelLogin = (e) => {
        e.preventDefault()
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Password dosent match",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })


    }
    return (
        <div>
            <div className="text-center space-y-5 mt-5 mb-5 ">
                <h1 className="text-4xl font-semibold">Login or Register</h1>
                <p className=" font-semibold "><small>Sign in and choose your service to have access to all our service.</small></p>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/C1hYLBx/close-up-people-volunteer-teamwork-join-hands-togetherstack-handsunity-teamwork-volunteering-concept.jpg)' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className=" w-1/2 mr-12 ">
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl glass">
                            <form onSubmit={handelLogin} className="card-body">
                                <h1 className="text-4xl text-center font-bold">Sign in!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onBlur={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input onBlur={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn bg-primary text-white">Sign in</button>
                                </div>
                            </form>
                            <div onClick={handelGoogle} className='flex justify-center '>
                                <button className="btn glass underline">
                                    login with Google < FcGoogle className=' text-2xl' />
                                </button>


                            </div>
                            <p className='my-4 text-center'>Have an account?
                                <Link className='text-primary font-bold' to='/register'> Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;