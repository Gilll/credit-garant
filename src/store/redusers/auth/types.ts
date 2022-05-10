import {UserData} from "../../../model/IUser";

export interface AuthState {
    isAuth: boolean,
    user: UserData,
    isLoading: boolean,
    error: string
}

export enum AuthActionsEnum {
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING"
}

export interface SetAuthActions {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

export interface SetErrorAction {
    type: AuthActionsEnum.SET_ERROR;
    payload: string;
}

export interface SetUserAction {
    type: AuthActionsEnum.SET_USER;
    payload: UserData;
}

export interface SetIsLoadingAction {
    type: AuthActionsEnum.SET_IS_LOADING;
    payload: boolean;
}

export type AuthAction =
    SetAuthActions |
    SetErrorAction |
    SetUserAction |
    SetIsLoadingAction