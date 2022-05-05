import {setAppStatusAC} from "../Store-Reducers/App-Reducer";
import {AuthAPI} from "../API/API";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {addNewNameAndAvatar} from "../Store-Reducers/Auth-Reducer";
import {AppThunkType} from "../Store-Reducers/Store";

export const NewNameAndAvatarTC = (newName: string, newAvatar: string): AppThunkType => async dispatch => {
    dispatch(setAppStatusAC({status: 'loading'}));
    try {
        const response = await AuthAPI.newNameAndAvatar(newName, newAvatar);
        if (response.data.updatedUser) {
            dispatch(addNewNameAndAvatar({...response.data.updatedUser, name: newName, avatar: newAvatar}));
            dispatch(setAppStatusAC({status: 'succeeded'}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};


