import React from 'react';
import {NotAuthRedirect} from "../../UtilsFunction/RedirectFunction";
import {LogOutTC} from "../../Thunk's/Auth-Thunk";
import {useTypedDispatch} from "../../Store-Reducers/Store";

export const Profile = NotAuthRedirect(() => {

    const dispatch = useTypedDispatch();

    const onClickHanlder = () => {
        dispatch(LogOutTC());
    }

    return (
        <div>
            <h1>Page is in progress</h1>

            <button onClick={onClickHanlder}>LogOut</button>
        </div>
    )
});


