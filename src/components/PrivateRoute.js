import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    
    return isLoggedIn ? <Navigate to="/home" />: <Navigate to="/Login" />;
};

export default PrivateRoute;
