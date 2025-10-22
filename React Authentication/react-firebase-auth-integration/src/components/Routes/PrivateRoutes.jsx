import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loading} = use(AuthContext);

    const location = useLocation();
    console.log('Location from private route, ', location);

    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoutes;