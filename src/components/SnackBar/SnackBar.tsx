import React from 'react';
import {useDispatch, } from "react-redux";
import {useAppSelector} from "../../Store-Reducers/Store";
import {AppInitialStateType, setAppErrorMessageAC} from "../../Store-Reducers/App-Reducer";



export const Snackbars = () => {

    const { error } = useAppSelector<AppInitialStateType>(state => state.AppReducer);
    const dispatch = useDispatch();

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setAppErrorMessageAC({error: null}));
    };

    return (
            <div onChange={handleClose}>
                {error}
            </div>
    );
};
