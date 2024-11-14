import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('username') || !!document.cookie.split('; ').find(row => row.startsWith('username='));

  if (!isAuthenticated) {
    localStorage.setItem('redirectUrl', location.pathname + location.search);
    return <Navigate to="/" state={{ from: location }} />;
  }

  return element;
};

export default PrivateRoute;