import React, { useContext } from 'react'
import { AuthContextProvider } from '../../context/AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

function PrivateRoute({ children }) {

    const { user, loading } = useContext(AuthContextProvider)
    const location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="primary" />

    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
}

export default PrivateRoute