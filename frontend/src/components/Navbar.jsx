import { NavLink } from 'react-router-dom';
import './header.css';

export const Navbar = () => {
   const activeStyle = {
      fontWeight: 'bold',
      fontSize: '2rem'
   };

   return (
      <nav className="flex items-center justify-between px-2 pt-2 flex-wrap">
         <NavLink to="/" className="p-2 mr-4 inline-flex bg-white items-center">
            <h1 className="text-xl text-gray-900 font-bold uppercase tracking-wide py-0">
               Trip Planner
            </h1>
         </NavLink>

         <button
            className="text-white inline-flex p-3 hover:bg-gray-900 rounded md:hidden ml-auto hover:text-white outline-none nav-toggler"
            data-target="#navigation"
         >
            <i className="material-icons">Menu</i>
         </button>

         <div
            className="hidden w-full md:inline-flex md:flex-grow md:w-auto"
            id="navigation"
         >
            <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto">
               <NavLink
                  to="/"
                  activeclassname="active"
                  className="md:inline-flex md:w-auto w-full px-3 mr-0.5 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
                  end
               >
                  Home
               </NavLink>

               <NavLink
                  to="/plantrip"
                  activeclassname="active"
                  className="md:inline-flex md:w-auto w-full px-3 mr-0.5 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
               >
                  Plan Trip
               </NavLink>

               <NavLink
                  to="/discover"
                  activeclassname="active"
                  className="md:inline-flex md:w-auto w-full px-3 py-2 mr-0.5 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
               >
                  Discover
               </NavLink>

               <NavLink
                  to="/Login"
                  activeclassname="active"
                  className="md:inline-flex md:w-auto w-full px-3 py-2 mr-0.5 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
               >
                  Login
               </NavLink>

               <NavLink
                  to="/Signup"
                  activeclassname={activeStyle}
                  className="md:inline-flex md:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
               >
                  Signup
               </NavLink>
            </div>
         </div>

         <hr className="bg-white w-screen h-0" />
      </nav>
   );
};
