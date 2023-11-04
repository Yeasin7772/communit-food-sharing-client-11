import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
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
                    <div className="flex-1 px-2 mx-2 text-5xl font-bold text-yellow-500">Be AHand </div>
                    <div className="flex-none hidden lg:block">
                        <div className="flex justify-center items-center gap-5 ">
                            {/* Navbar menu content here */}
                            {navLinks}

                        </div>


                    </div>
                    <div className="dropdown ml-5 dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {navLinks}
                </ul>
            </div>

        </div>
    );
};

export default NavBar;