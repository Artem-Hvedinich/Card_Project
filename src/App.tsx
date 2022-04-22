import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/Error404";
import {Login} from './components/Login';
import {NewPassword} from './components/NewPassword';
import {Profile} from './components/Profile';
import {ForgotPassword} from './components/ForgotPassword';
import {Register} from "./components/Register";
import {Testing} from './components/Testing';
import {Header} from "./components/Header";
import styled from "styled-components";

export const PATH = {
    login: '/login',
    registration: '/registration',
    profile: '/profile',
    error: '/404',
    forgotPassword: '/recPas',
    newPassword: '/newPas',
    testing: '/testing',
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh`

const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0`


export const App = () => {
    return (
        <AppWrapper>
            <HeaderWrapper><Header/></HeaderWrapper>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.error}/>}/>
                <Route path={PATH.login} element={<Login/>}/>
                <Route path={PATH.registration} element={<Register/>}/>
                <Route path={PATH.profile} element={<Profile/>}/>
                <Route path={PATH.error} element={<Error404/>}/>
                <Route path={PATH.forgotPassword} element={<ForgotPassword/>}/>
                <Route path={PATH.newPassword} element={<NewPassword/>}/>
                <Route path={PATH.testing} element={<Testing/>}/>
            </Routes>
        </AppWrapper>
    )
}
