import { NavLink, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
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




    const navLinks = <>
        <NavLink to='/' className={({ isActive, isPending }) =>
            isActive ? 'btn btn-primary btn-sm' : isPending ? 'btn btn-ghost  btn-sm' : ' '
        }>Home</NavLink>
        <NavLink to='/addFood' className={({ isActive, isPending }) =>
            isActive ? 'btn btn-primary btn-sm' : isPending ? 'btn btn-ghost  btn-sm' : ' '
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
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-3xl font-bold text-yellow-500">AHand </div>
                    <div className="flex-none hidden lg:block">
                        <div className="flex justify-center items-center gap-5 ">
                            {/* Navbar menu content here */}
                            {navLinks}

                        </div>


                    </div>
                    <div className="ml-5">
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

                                <div className="flex justify-between items-center" >
                                    <Link to='/login'>
                                        <button className="btn btn-sm  btn-ghost">Sign In</button>
                                    </Link>
                                    <div className="w-12 rounded-full">
                                   <img src='https://i.ibb.co/Y8fBVjy/boy2.jpg' alt='' /> 

                                    </div>
                                   

                                </div>
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