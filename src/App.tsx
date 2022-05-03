import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/Components for working with login/ErrorPage/Error404";
import {Login} from './components/Login and Registration/Login/Login';
import {NewPassword} from './components/Components for working with login/NewPassword/NewPassword';
import {Profile} from './components/Profile/Profile';
import {ForgotPassword} from './components/Components for working with login/ForgotPassword/ForgotPassword';
import {Register} from "./components/Login and Registration/Registration/Register";
import {CheckEmail} from "./components/Components for working with login/CheckEmail/CheckEmail";
import {TypedDispatch, useAppSelector} from "./Store-Reducers/Store";
import {AppInitialStateType} from "./Store-Reducers/App-Reducer";
import {Loading} from "./components/Common/Loading/Loading";
import {useDispatch} from "react-redux";
import {AuthMeTC} from "./Thunk's/Auth-Thunk";
import {PATH} from "./UtilsFunction/const-enum-path";
import {Snackbars} from './components/SnackBar/SnackBar';
import {AppWrapper} from "./components/StylesComponents/Wrapper";

export const App = () => {

    const stateApp = useAppSelector<AppInitialStateType>(state => state.AppReducer);
    const dispatch = useDispatch<TypedDispatch>();

    useEffect(() => {
        dispatch(AuthMeTC());
    }, [dispatch]);


    if (stateApp.isFetching) return <Loading/>
    return (
        <AppWrapper>
            {/*/!*   Error Block // need styles*/}
            {stateApp.status === 'loading' && <Loading/>}
            <Snackbars/>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.profile}/>}/>
                <Route path={PATH.login} element={<Login/>}/>
                <Route path={PATH.registration} element={<Register/>}/>
                <Route path={PATH.profile} element={<Profile/>}/>
                <Route path={PATH.error} element={<Error404/>}/>
                <Route path={PATH.forgotPassword} element={<ForgotPassword/>}/>
                <Route path={PATH.newPassword + "/:token"} element={<NewPassword/>}/>
                <Route path={PATH.checkEmail} element={<CheckEmail/>}/>
            </Routes>
        </AppWrapper>
    )
};