import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/Components for working with login/ErrorPage/Error404";
import {Login} from './components/Login and Registration/Login/Login';
import {NewPassword} from './components/Components for working with login/NewPassword/NewPassword';
import {Profile} from './components/Profile/Profile';
import {ForgotPassword} from './components/Components for working with login/ForgotPassword/ForgotPassword';
import {Register} from "./components/Login and Registration/Registration/Register";
import {Header} from "./components/Header/Header";
import {CheckEmail} from "./components/Components for working with login/CheckEmail/CheckEmail";
import {AppWrapper} from "./App-styled";
import {TypedDispatch, useAppSelector} from "./Store-Reducers/Store";
import {AppInitialStateType} from "./Store-Reducers/App-Reducer";
import {Loading} from "./components/Common/Loading/Loading";
import {useDispatch} from "react-redux";
import {AuthMeTC} from "./Thunk's/Auth-Thunk";
import {Snackbars} from "./components/SnackBar/SnackBar";
import {PATH} from "./UtilsFunction/const-enum-path";



export const App = () => {

    const stateApp = useAppSelector<AppInitialStateType>(state => state.AppReducer);
    const dispatch = useDispatch<TypedDispatch>();

    useEffect(() => {
        dispatch(AuthMeTC());
    }, []);


    if (stateApp.isFetching) return <Loading />
    return (
        <AppWrapper>
            <Header/>
            {/*   Error Block // need styles
            <Snackbars />
            */}
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
