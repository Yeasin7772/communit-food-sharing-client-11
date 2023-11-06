import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')
    const nevigate = useNavigate()


    const { createUser, handleProfile } = useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState('')

    console.log(name, email, password, photo);

    const handelRegister = (e) => {
        e.preventDefault()

        // clear the form -->

        setRegisterError('')
        setRegisterSuccess('')

        if (password.length < 6) {
            setRegisterError('Password is less than 6 characters')
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Password is less than 6 characters',
                showConfirmButton: false,
                timer: 1500
            })

        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Provide capital characters.')
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Provide special capital characters',
                showConfirmButton: false,
                timer: 1500
            })
            return
        } else if (!/[@#$%^&+=!]/.test(password)) {
            setRegisterError('provide a contain special character')
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'provide a contain special character',
                showConfirmButton: false,
                timer: 1500
            })
            return
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                handleProfile(name, photo)
                setRegisterSuccess('user created successFully')
                nevigate('/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'user created successFully',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.messages)

            })

    }
    return (
        <div>
            <div className="text-center space-y-5 mt-5 mb-5 text-primary">
                <h1 className="text-4xl font-semibold">Login or Register</h1>
                <p className=" font-semibold "><small>Sign in and choose your service to have access to all our service.</small></p>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/C1hYLBx/close-up-people-volunteer-teamwork-join-hands-togetherstack-handsunity-teamwork-volunteering-concept.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>

                <div className="hero min-h-screen ">

                    <div className="hero-content flex-col lg:flex-row">
                        <div className=" w-1/2 mr-12 ">
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl glass">
                            <form onSubmit={handelRegister} className="card-body">
                                <h1 className="text-4xl text-center font-bold">Sign Up!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input onBlur={(e) => setName(e.target.value)} type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onBlur={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Photo URL</span>
                                    </label>
                                    <input onBlur={(e) => setPhoto(e.target.value)} type="Image URL" name='photo' placeholder=" Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input onBlur={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="password" className="input input-bordered" required />
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

                                    className='text-primary font-bold' to='/login'> Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;