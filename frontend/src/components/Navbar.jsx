import { NavLink } from 'react-router-dom';
import './header.css';

export const Navbar = () => {
   const activeStyle = {
      fontWeight: 'bold',
      fontSize: '2rem'
   };

   return (
      <nav className="flex items-center justify-between px-2 pt-2 flex-wrap bg-opacity-100 bg-transparent">
         <NavLink to="/" className="p-2 mr-4 inline-flex items-center">
            <span className="text-xl text-gray-400 font-bold uppercase tracking-wide py-0">
               Brand Name
            </span>
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
                  exact
                  to="/"
                  activeClassName="active"
                  className="md:inline-flex md:w-auto w-full px-3 py-3 items-center justify-center "
                  end
               >
                  Home
               </NavLink>

               <NavLink
                  exact
                  to="/plantrip"
                  activeClassName="active"
                  className="md:inline-flex md:w-auto w-full px-3 py-2 rounded items-center justify-center "
               >
                  Plan Trip
               </NavLink>

               <NavLink
                  to="/discover"
                  activeClassName="active"
                  className="md:inline-flex md:w-auto w-full px-3 py-2 items-center justify-center hover:bg-gray-900 hover:text-white"
               >
                  Discover
               </NavLink>

               <NavLink
                  to="/Login"
                  activeClassName="active"
                  className="md:inline-flex md:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
               >
                  Login
               </NavLink>

               <NavLink
                  to="/Signup"
                  activeClassName={activeStyle}
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
