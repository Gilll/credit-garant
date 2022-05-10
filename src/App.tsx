import {FC, useEffect, useState} from 'react';
import "./styles/scss/style.scss";
import 'antd/dist/antd.min.css';
import MainMenu from "./components/MainMenu";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import * as React from "react";
import {useTypedSelector} from "./hooks/useTypedSelector";
import API from "./router/apiConfig";
import {AuthActionCreators} from "./store/redusers/auth/action-creators";
import {useDispatch} from "react-redux";
import Blank from "./pages/Blank";
import {AxiosError} from "axios";

const App:FC = () => {
    const dispatch = useDispatch();
    const {isAuth} = useTypedSelector(state => state.auth);
    const [checkCookie, setCheckCookie] = useState(true);

    useEffect(() => {
        API.get('/profile/get').then(function (user) {
            dispatch(AuthActionCreators.setUser(user.data.result[0]));
            dispatch(AuthActionCreators.setIsAuth(true));
        }).catch(function (error: AxiosError) {
            console.log(error.response!);
        }).then(function () {
            setCheckCookie(false);
        });
    }, [])

  return (
    <div className="App">
        <BrowserRouter>
            {checkCookie ?
                    <Blank/>
                    :
                    <>
                        {isAuth && <MainMenu/>}
                        <AppRouter/>
                    </>
            }
        </BrowserRouter>
    </div>
  );
}

export default App;
