import React, {FC} from 'react';
import {Navigate, Outlet} from "react-router";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const AuthRoutes:FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth);
    return (
        <>
            { isAuth ? <Navigate to="/intro"/> : <Outlet/> }
        </>
    );
};

export default AuthRoutes;