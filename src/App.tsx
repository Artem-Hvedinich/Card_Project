import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/ErrorPage/Error404";
import {Login} from './components/Login and Registration/Login/Login';
import {NewPassword} from './components/Components for working with login/NewPassword/NewPassword';
import {Profile} from './components/Profile/Profile';
import {ForgotPassword} from './components/Components for working with login/ForgotPassword/ForgotPassword';
import {Register} from "./components/Login and Registration/Registration/Register";
import {Header} from "./components/Header/Header";
import {CheckEmail} from "./components/Components for working with login/CheckEmail/CheckEmail";
import {AppWrapper} from "./App-styled";
import {useAppSelector} from "./Store-Reducers/Store";
import {AppInitialStateType} from "./Store-Reducers/App-Reducer";

export const PATH = {
    login: '/login',
    registration: '/registration',
    profile: '/profile',
    error: '/404',
    forgotPassword: '/recPas',
    newPassword: '/newPas',
    checkEmail: '/checkEmail',
};

export const App = () => {

    const stateApp = useAppSelector<AppInitialStateType>(state => state.AppReducer);

    return (
        <AppWrapper>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.error}/>}/>
                <Route path={PATH.login} element={<Login/>}/>
                <Route path={PATH.registration} element={<Register/>}/>
                <Route path={PATH.profile} element={<Profile/>}/>
                <Route path={PATH.error} element={<Error404/>}/>
                <Route path={PATH.forgotPassword} element={<ForgotPassword/>}/>
                <Route path={PATH.newPassword} element={<NewPassword/>}/>
                <Route path={PATH.checkEmail} element={<CheckEmail/>}/>
            </Routes>
        </AppWrapper>
    )
}
