import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return(

        <nav className="flex items-center bg-gray-800 p-3 flex-wrap">

            <NavLink  to="/" className="p-2 mr-4 inline-flex items-center">
        
                <span class="text-xl text-white font-bold uppercase tracking-wide">Brand Name</span>
        
            </NavLink>
            
            <button className="text-white inline-flex p-3 hover:bg-gray-900 rounded md:hidden ml-auto hover:text-white outline-none nav-toggler"
            data-target="#navigation">
            
                <i className="material-icons">Menu</i>
            
            </button>
            
            <div className="hidden w-full md:inline-flex md:flex-grow md:w-auto" id="navigation">
            
                <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto">
            
                    <NavLink to="/explore" className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            
                        Explore
            
                    </NavLink>
            
                    <NavLink to="/discover" className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            
                        Discover
            
                    </NavLink>
            
                    <NavLink to="/Login" className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            
                        Login
            
                    </NavLink>
            
                    <NavLink to="/Signup" className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            
                        Signup
            
                    </NavLink>
            
                </div>
            
            </div>
        
        </nav>
    );
};