import {getAllPacksTC} from "../Thunk's/PacksThunk";
import {AppRootStateType} from "../Store-Reducers/Store";

export const FilterAllMyFunction = (dispatch: any, getState: () => AppRootStateType) => {
    if (getState().PacksReducer.filter === 'My') {
        dispatch(getAllPacksTC(getState().AuthorizationReducer._id));
    } else dispatch(getAllPacksTC())
};
