import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../App";


export const Header = () => {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <NavLink to={PATH.login}>Login</NavLink>
            <NavLink to={PATH.registration}>Registration</NavLink>
            <NavLink to={PATH.forgotPassword}>ForgotPassword</NavLink>
            <NavLink to={PATH.newPassword}>NewPassword</NavLink>
            <NavLink to={PATH.profile}>Profile</NavLink>
            <NavLink to={PATH.error}>Error404</NavLink>

            <NavLink to={PATH.testing}>Testing</NavLink>
        </div>
    )
}
