import { NavLink, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/AuthContext/auth-context';
import './header.css';

export const Navbar = () => {
   const { user, logOut } = useUserAuth();
   const navigate = useNavigate();
   console.log(user);

   // console.log('displayName', user.displayName);
   const handleLogOut = async () => {
      try {
         await logOut();
         navigate('/Login');
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <nav className="flex items-center justify-between px-2  pt-2 flex-wrap">
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

               <div className="dropdown">
                  <span className="md:inline-flex md:w-auto w-full px-3 py-2  mr-0.5 rounded items-center justify-center ">
                     {user ? 'Account' : 'Login'}{' '}
                     <i className="bx bx-chevron-down w-full timepass text-2xl"></i>
                  </span>

                  <div className="dropdown-content rounded  bg-white text-center p-2.5">
                     <span>
                        {user ? null : (
                           <NavLink
                              to="/Login"
                              className="flex w-full bg-white hover:bg-gray-900 hover:text-white px-3 py-2 mr-0.5 rounded items-center justify-start"
                           >
                              <i className="bx bx-log-in mr-1.5 text-xl"></i>{' '}
                              Login
                           </NavLink>
                        )}
                        <hr className="bg-gray-400 w-full h-0.5 my-1.5" />
                     </span>
                     <NavLink
                        to="/account"
                        className="bg-white flex hover:bg-gray-900 hover:text-white w-full  px-3 py-2 mr-0.5 rounded items-center justify-start"
                     >
                        <i className="bx bxs-user mr-1.5 text-xl"></i> Account{' '}
                     </NavLink>
                     <span>
                        <hr className="bg-gray-400 w-full h-0.5 my-1.5" />
                        {user ? (
                           <div
                              onClick={handleLogOut}
                              className="flex hover:bg-gray-900 cursor-pointer hover:text-white w-full px-3 py-2 rounded items-center justify-start "
                           >
                              <i className="bx bx-log-out mr-1.5 text-xl"></i>{' '}
                              Logout{' '}
                           </div>
                        ) : (
                           <NavLink
                              to="/signup"
                              className="bg-white flex hover:bg-gray-900 hover:text-white w-full px-3 py-2 mr-0.5 rounded items-center justify-start"
                           >
                              <i className="bx bxs-user-plus mr-1.5 text-xl"></i>
                              Signup
                           </NavLink>
                        )}
                     </span>
                  </div>
               </div>
            </div>
         </div>

         <hr className="bg-white w-screen h-0" />
      </nav>
   );
};
