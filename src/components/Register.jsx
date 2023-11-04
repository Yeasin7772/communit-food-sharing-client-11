import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(http://unlockdesizn.com/html/non-profit/be-ahand/demo/images/about/1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className=" w-1/2 mr-12 ">
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl glass">
                        <form  className="card-body">
                            <h1 className="text-4xl text-center font-bold">Sign Up!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Photo URL</span>
                                </label>
                                <input type="image" name='photo' placeholder=" Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-primary text-white">Sign Up</button>
                            </div>
                        </form>
                          
                            <p className='my-4 text-center'>Have an account?
                                <Link
                                
                                 className='text-primary font-bold' to='/register'> Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;