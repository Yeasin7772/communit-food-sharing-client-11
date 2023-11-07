import { NavLink, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
const NavBar = () => {

    const { user, logOut } = useAuth()
    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handelToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('lemonade')
        }
    }




    const navLinks = <>
        <NavLink to='/' className={({ isActive, isPending }) =>
            isActive ? 'btn btn-primary btn-sm ' : isPending ? 'btn btn-ghost  btn-sm' : ' '
        }>Home</NavLink>
        <NavLink to='/addFood' className={({ isActive, isPending }) =>
            isActive ? 'btn btn-primary btn-sm ' : isPending ? 'btn btn-ghost  btn-sm '  : ' '
        }>Add Food </NavLink>
        <NavLink to='/availableFoods' className={({ isActive, isPending }) =>
            isActive ? 'btn btn-primary btn-sm' : isPending ? 'btn btn-ghost  btn-sm' : ' '
        }>Available Foods</NavLink>
        <NavLink to='/manageMyFoods' className={({ isActive, isPending }) =>
            isActive ? 'btn btn-primary btn-sm' : isPending ? 'btn btn-ghost  btn-sm' : ' '
        }>Manage My Foods</NavLink>
        <NavLink to='/myFoodRequest' className={({ isActive, isPending }) =>
            isActive ? 'btn btn-primary btn-sm' : isPending ? 'btn btn-ghost  btn-sm' : ' '
        }>My Food Request</NavLink>
        <NavLink to='/contact' className={({ isActive, isPending }) =>
            isActive ? 'btn btn-primary btn-sm' : isPending ? 'btn btn-ghost  btn-sm' : ' '
        }>Contact us</NavLink>
    </>
    return (
        <div className="drawer rounded-full">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-3xl font-bold text-yellow-500"> 
                    <img src="http://unlockdesizn.com/html/non-profit/be-ahand/demo/images/header-logo.png" alt="" />
                    </div>
                    <div className="flex-none hidden lg:block">
                        <div className="flex justify-center items-center gap-5 ">
                            {/* Navbar menu content here */}
                            {navLinks}

                        </div>


                    </div>

                    <div className="ml-5">
                        <div className="mr-10">

                            {/* theme change input */}
                            <label className="swap swap-rotate">

                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox"
                                    onChange={handelToggle}
                                    checked={theme === "lemonade" ? false : true}
                                />

                                {/* sun icon */}
                                <svg className="swap-on fill-current w-7 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* moon icon */}
                                <svg className="swap-off fill-current w-7 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                        </div>
                        {
                            user?.email ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                                    <div className="w-12 rounded-full">
                                        <img src={user?.photoURL} alt='' />

                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <button className="btn btn-ghost">{user.displayName}</button>

                                    </li>
                                    <li>
                                        <button className="btn  btn-ghost"
                                            onClick={handelLogOut}
                                        >Sign Out</button>

                                    </li>
                                </ul>
                            </div>
                                :

                                
                                    <Link to='/login'>
                                        <button className="btn btn-ghost">Sign In</button>
                                    </Link>
                                   


                                
                        }
                    </div>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <div className="flex flex-col justify-center items-center gap-5">
                        {navLinks}
                    </div>
                </ul>
            </div>

        </div>
    );
};

export default NavBar;