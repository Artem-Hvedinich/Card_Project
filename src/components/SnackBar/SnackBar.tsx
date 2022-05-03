import React from 'react';
import "./SnackBar.css";
import {useDispatch,} from "react-redux";
import {TypedDispatch, useAppSelector} from "../../Store-Reducers/Store";
import {AppInitialStateType, setAppErrorMessageAC} from "../../Store-Reducers/App-Reducer";


export const Snackbars = () => {

    const {error} = useAppSelector<AppInitialStateType>(state => state.AppReducer);
    const dispatch = useDispatch<TypedDispatch>();

    const handleClose = () => {

        let snack = document.getElementById("snackbar");
        if (snack) {
            snack.className = "show";
            setTimeout(() => {
                if (snack) {
                    snack.className = snack.className.replace("show", "");
                }

                dispatch(setAppErrorMessageAC({error: null}));
            }, 3000);
        }
    };

    console.log(error)

    if (error) { handleClose() }
    return (
        <div>
            <div id={"snackbar"} className={"snackbar"}>{error}</div>
        </div>
    );
};
