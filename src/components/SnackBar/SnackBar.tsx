import React, {useEffect} from 'react';
import "./SnackBar.css";
import {useDispatch,} from "react-redux";
import {TypedDispatch, useAppSelector} from "../../Store-Reducers/Store";
import {AppInitialStateType, setAppErrorMessageAC} from "../../Store-Reducers/App-Reducer";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Snackbar = () => {

    const {error} = useAppSelector<AppInitialStateType>(state => state.AppReducer);
    const dispatch = useDispatch<TypedDispatch>();

    useEffect(() => {
        toast.error(error);
        dispatch(setAppErrorMessageAC({error: null}));
    },[error])

    return (
        <>
            {/*Мужик , офигенная библиотека
            https://fkhadra.github.io/react-toastify/introduction/
            почитай и цвета и всякая декорация , круто в общем , для общего ознакомления must have*/}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={true}
                pauseOnHover
            />
        </>
    );
};