import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/Components for working with login/ErrorPage/Error404";
import {Login} from './components/Login and Registration/Login/Login';
import {NewPassword} from './components/Components for working with login/NewPassword/NewPassword';
import {ForgotPassword} from './components/Components for working with login/ForgotPassword/ForgotPassword';
import {Register} from "./components/Login and Registration/Registration/Register";
import {CheckEmail} from "./components/Components for working with login/CheckEmail/CheckEmail";
import {TypedDispatch, useAppSelector} from "./Store-Reducers/Store";
import {AppInitialStateType} from "./Store-Reducers/App-Reducer";
import {Loading} from "./components/Common/Loading/Loading";
import {useDispatch} from "react-redux";
import {AuthMeTC} from "./Thunk's/Auth-Thunk";
import {PATH} from "./UtilsFunction/const-enum-path";
import {AppWrapper} from "./components/StylesComponents/Wrapper";
import {Snackbar} from "./components/SnackBar/SnackBar";
import { Header } from './components/Header/Header';
import { Profile } from './components/ProfileGeneral/Profile/Profile';
import {PacksList} from "./components/ProfileGeneral/PacksList/PacksList";

export const App = () => {

    const stateApp = useAppSelector<AppInitialStateType>(state => state.AppReducer);
    const isAuth = useAppSelector<boolean>(state => state.AuthorizationReducer.isAuth);
    const dispatch = useDispatch<TypedDispatch>();

    useEffect(() => {
        dispatch(AuthMeTC());
    }, []);

    return (
        <AppWrapper>
            {stateApp.status === 'loading'
                ? <Loading/>
                : <>
                    {isAuth && <Header/>}
                    <Snackbar/>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.profile}/>}/>
                        <Route path={PATH.login} element={<Login/>}/>
                        <Route path={PATH.registration} element={<Register/>}/>
                        <Route path={PATH.profile} element={<Profile/>}/>
                        <Route path={PATH.packsList} element={<PacksList/>}/>
                        <Route path={PATH.error} element={<Error404/>}/>
                        <Route path={PATH.forgotPassword} element={<ForgotPassword/>}/>
                        <Route path={PATH.newPassword + "/:token"} element={<NewPassword/>}/>
                        <Route path={PATH.checkEmail} element={<CheckEmail/>}/>
                    </Routes>
                </>
            }
        </AppWrapper>
    )
};