import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/AuthContext/auth-context';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [forgetEmail, setForgetEmail] = useState('');
   const [open, setOpen] = useState(false);
   const { login, passwordReset } = useUserAuth();
   const navigate = useNavigate();

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      handleForgetPassword();
      setOpen(false);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await login(email, password);
         navigate('/account');
      } catch (err) {
         setError(err.message);
      }
   };

   const handleForgetPassword = async () => {
      try {
         await passwordReset(forgetEmail);
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <div className="flex items-center h-screen backgroundImage">
         <div className="bg-black w-96 m-auto py-10 shadow-xl rounded-md bg-opacity-40 backdrop-filter backdrop-blur-sm">
            <div className="py-6 px-8 rounded-xl">
               <h1 className="font-light text-white text-4xl mt-3 text-center">
                  Welcome Back
               </h1>

               <form onSubmit={handleSubmit} className="mt-6">
                  <div className="my-5 text-sm">
                     <label
                        htmlFor="email"
                        className="block text-white text-sm"
                     >
                        Email
                     </label>

                     <input
                        onChange={(e) => {
                           setEmail(e.target.value);
                        }}
                        type="text"
                        name="email"
                        autoFocus
                        id="email"
                        className="rounded-sm font-normal px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                        placeholder="Email"
                     />
                  </div>

                  <div className="my-5 text-sm">
                     <label
                        htmlFor="password"
                        className="block text-white text-sm"
                     >
                        Password
                     </label>
                     <input
                        onChange={(e) => {
                           setPassword(e.target.value);
                        }}
                        type="password"
                        name="password"
                        id="password"
                        className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                        placeholder="Password"
                     />
                  </div>

                  {error && (
                     <div
                        className="bg-red-100 border-l-4 border-red-600 text-red-600 p-4"
                        role="alert"
                     >
                        <p className="font-bold">Error</p>
                        <p>{error}</p>
                     </div>
                  )}

                  <div className="flex justify-between items-center pt-6">
                     <div className="flex">
                        <Link to="/signup" className="text-white">
                           Register
                        </Link>

                        <p
                           onClick={handleClickOpen}
                           className="text-white cursor-pointer ml-4"
                        >
                           Forget Password?
                        </p>
                        <Dialog open={open} onClose={handleClose}>
                           <DialogTitle className="text-red-600">
                              Forget Password
                           </DialogTitle>
                           <DialogContent>
                              <DialogContentText className="text-black">
                                 To reset your password, please enter your email
                                 id.
                                 <br /> We will send the password reset
                                 instructions to the email address for this
                                 account.
                              </DialogContentText>
                              <TextField
                                 autoFocus
                                 margin="dense"
                                 id="name"
                                 label="Email Address"
                                 type="email"
                                 fullWidth
                                 error
                                 onChange={(e) => {
                                    setForgetEmail(e.target.value);
                                 }}
                                 variant="standard"
                              />
                           </DialogContent>
                           <DialogActions>
                              <Button
                                 onClick={handleClose}
                                 className="text-black"
                              >
                                 Send
                              </Button>
                           </DialogActions>
                        </Dialog>
                     </div>

                     <button className="block text-center text-white bg-gray-800 p-2 duration-300 rounded hover:bg-black ">
                        {/* {status === 'loading' ? (
                                <i className="animate-spin bx bx-loader-alt font-thin"></i>
                            ) : (
                                'Login'
                            )} */}
                        Login
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
