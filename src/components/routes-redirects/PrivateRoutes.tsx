import React, {FC} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Navigate, Outlet} from "react-router";

const PrivateRoutes:FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth);
    return (
        <>
            { isAuth ? <Outlet/> : <Navigate to="/login"/> }
        </>
    );
};

export default PrivateRoutes;