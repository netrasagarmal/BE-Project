import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/AuthContext/auth-context';

export default function Signup() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { signUp, updateProfil } = useUserAuth();
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await signUp(email, password);
         await updateProfil(name);
         navigate('/account');
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <div className="flex items-center backgroundImage">
         <div className="bg-black w-96 m-auto my-10 shadow-xl rounded-md bg-opacity-40 backdrop-filter backdrop-blur-sm">
            <div className="py-6 px-8">
               <h1 className="font-light text-white text-4xl mt-3 text-center">
                  Create Account
               </h1>
               <form onSubmit={handleSubmit} className="mt-6">
                  <div className="my-5 text-sm">
                     <label className="block text-white">Name</label>
                     <input
                        onChange={(e) => {
                           setName(e.target.value);
                        }}
                        type="text"
                        name="name"
                        className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                        required={true}
                        placeholder="Name"
                     />
                  </div>
                  <div className="my-5 text-sm">
                     <label className="block text-white">Email</label>
                     <input
                        onChange={(e) => {
                           setEmail(e.target.value);
                        }}
                        type="email"
                        name="email"
                        className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                        required={true}
                        placeholder="Email"
                     />
                  </div>
                  <div className="my-5 text-sm">
                     <label className="block text-white">Password</label>
                     <input
                        onChange={(e) => {
                           setPassword(e.target.value);
                        }}
                        type="password"
                        name="password"
                        className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                        required={true}
                        placeholder="Password"
                     />
                  </div>

                  <button
                     className={`block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full`}
                  >
                     {/* {status === 'loading' ? (
                        <i className="animate-spin bx bx-loader-alt font-thin"></i>
                     ) : (
                        'Signup'
                     )} */}
                     Signup
                  </button>
               </form>
               <p className="mt-12 text-sm text-center font-normal text-gray-300">
                  Already have an account?{' '}
                  <Link to="/login" className="text-white font-medium">
                     Log In
                  </Link>
               </p>
               {/* {errorMessage && (
                  <p className="text-red-600 text-sm text-center font-semibold">
                     {errorMessage}
                  </p>
               )} */}
            </div>
         </div>
      </div>
   );
}
