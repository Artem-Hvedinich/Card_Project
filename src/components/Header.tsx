import      React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../App";


export const Header = () => {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <NavLink to={PATH.login}>Login</NavLink>
            <NavLink to={PATH.registration}>Registration</NavLink>
            <NavLink to={PATH.forgotPassword}>Forgot Password</NavLink>
            <NavLink to={PATH.newPassword}>New Password</NavLink>
            <NavLink to={PATH.checkEmail}>Check Email</NavLink>
            <NavLink to={PATH.profile}>Profile</NavLink>
            <NavLink to={PATH.error}>Error 404</NavLink>
        </div>
    )
}
