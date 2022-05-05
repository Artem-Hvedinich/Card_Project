import {Action, AnyAction, combineReducers} from "redux";
import {configureStore, ThunkAction} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {AppReducer} from "./App-Reducer";
import {AuthorizationReducer} from "./Auth-Reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>;


const rootReducer = combineReducers({
    AppReducer,
    AuthorizationReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;


// Type on the Dispatch
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>;
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, Action>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();