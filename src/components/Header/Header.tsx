import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../UtilsFunction/const-enum-path";
import styled from "styled-components";

export const Header = () => {
    return (
        <HeaderWrapper>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <NavLink to={PATH.login}>Login</NavLink>
                <NavLink to={PATH.registration}>Registration</NavLink>
                <NavLink to={PATH.forgotPassword}>Forgot Password</NavLink>
                <NavLink to={PATH.newPassword}>New Password</NavLink>
                <NavLink to={PATH.checkEmail}>Check Email</NavLink>
                <NavLink to={PATH.profile}>Profile</NavLink>
                <NavLink to={PATH.error}>Error 404</NavLink>
            </div>
        </HeaderWrapper>
    )
}
export const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0`