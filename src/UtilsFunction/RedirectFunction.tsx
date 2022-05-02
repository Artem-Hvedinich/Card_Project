import {ComponentType, useEffect} from "react";
import {useAppSelector} from "../Store-Reducers/Store";
import {Navigate, useNavigate} from "react-router-dom";
import {PATH} from "./const-enum-path";

export function NotAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: any) => {

        let navigate = useNavigate()
        const isAuth = useAppSelector<boolean>(state => state.AuthorizationReducer.isAuth);
        useEffect(() => {
            if (!isAuth){
                navigate(PATH.login)
            }
        }, [isAuth])

        return <Component {...props as T}/>

    }

    return RedirectComponent
}

export function IsLoginRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: any) => {

        const isAuth = useAppSelector<boolean>(state => state.AuthorizationReducer.isAuth);
        if (isAuth) return (<Navigate to={PATH.profile}/>);

        return <Component {...props as T}/>

    }

    return RedirectComponent
}