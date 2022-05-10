import {AuthActionsEnum, SetAuthActions, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {UserData} from "../../../model/IUser";
import {AppDispatch} from "../../index";
import API from '../../../router/apiConfig'

export const AuthActionCreators = {
    setUser: (user: UserData): SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: user }),
    setIsAuth: (auth: boolean): SetAuthActions => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),
    setError: (error: string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: error }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: AuthActionsEnum.SET_IS_LOADING, payload: isLoading }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setIsLoading(true));
        API.post(`/signin?username=${username}&password=${password}`)
            .then(function (resp) {
                console.log(resp);
                dispatch(AuthActionCreators.setIsAuth(true));
                localStorage.setItem('auth', 'true');
                API.get('/profile/get').then(function (user) {
                    dispatch(AuthActionCreators.setUser(user.data.result[0]));
                    localStorage.setItem('user', user.data.result[0]);
                }).catch(function (error) {
                    console.log(error.response);
                });
        }).catch(function (error) {
            dispatch(AuthActionCreators.setError(error.response.data.error.description));
        }).then(function () {
            dispatch(AuthActionCreators.setIsLoading(false));
        })
    },
    logout: () => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setUser({} as UserData));
        dispatch(AuthActionCreators.setIsAuth(false));
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
        localStorage.removeItem('uuid');
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('exchangeName')
        API.get('/signout').catch(function (error) {
            console.log(error.response);
        });
    }
}