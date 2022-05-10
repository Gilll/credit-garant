import {Route, Routes} from "react-router";
import * as React from "react";
import {privateRoutes, authRoutes, profileRoutes} from "../router/index";
import PrivateRoutes from "./routes-redirects/PrivateRoutes";
import AuthRoutes from "./routes-redirects/AuthRoutes";
import Room from "./chat/Room";
import RoomNotSelected from "./chat/RoomNotSelected";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<AuthRoutes/>}>
                {authRoutes.map(route =>
                    <Route path={route.path} element={<route.element/>} key={route.path}/>
                )}
            </Route>
            <Route element={<PrivateRoutes/>}>
                {privateRoutes.map(route => route.sub ?
                    {
                        '/chat':
                            <Route path={route.path} element={<route.element/>} key={route.path}>
                                <Route index element={<RoomNotSelected/>}/>
                                <Route path=":id" element={<Room/>}/>
                            </Route>,
                        '/profile':
                            <Route path={route.path} element={<route.element/>} key={route.path}>
                                {profileRoutes.map(profileRoute =>
                                    <Route path={profileRoute.path} element={<profileRoute.element/>} key={profileRoute.path}/>
                                )}
                            </Route>
                    }[route.path]
                    :
                    <Route path={route.path} element={<route.element/>} key={route.path}/>
                )}
            </Route>
        </Routes>
    );
};

export default AppRouter;