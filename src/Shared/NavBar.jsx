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
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
               {navLinks}
              </ul>
            </div>
          </div>
          {/* Page content here */}
          Content
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