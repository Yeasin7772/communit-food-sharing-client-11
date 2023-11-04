import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    return (
        <div>


            <div className="hero min-h-screen" style={{ backgroundImage: 'url(http://unlockdesizn.com/html/non-profit/be-ahand/demo/images/about/1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className=" w-1/2 mr-12 ">

                            {/* <img src={img} alt="" /> */}
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl glass">
                            <form className="card-body">
                                <h1 className="text-4xl text-center font-bold">Sign in!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn bg-primary text-white">Sign in</button>
                                </div>
                            </form>
                            <div  className='flex justify-center '>
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