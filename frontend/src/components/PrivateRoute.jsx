import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/AuthContext/auth-context';

export const PrivateRoute = ({ path, ...props }) => {
   const { user } = useUserAuth();

   return user ? (
      <Route {...props} path={path} />
   ) : (
      <Navigate state={{ from: path }} replace to="/Login" />
   );
};
