import React from 'react';
import {NotAuthRedirect} from "../../UtilsFunction/RedirectFunction";
import {useDispatch} from "react-redux";
import {TypedDispatch} from "../../Store-Reducers/Store";
import {LogOutTC} from "../../Thunk's/Auth-Thunk";

type ProfileType = {

}

export const Profile = NotAuthRedirect(({}: ProfileType) => {

    const dispatch = useDispatch<TypedDispatch>();

    const onClickHandler = () => dispatch(LogOutTC());

    return (
        <div>
            <h1>Page is in progress</h1>

            <button onClick={onClickHandler}>LogOut</button>
        </div>
    )
});


