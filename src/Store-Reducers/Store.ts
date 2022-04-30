import {applyMiddleware, combineReducers, createStore} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {AppReducer} from "./App-Reducer";
import {AuthorizationReducer} from "./Auth-Reducer";


export type AppRootStateType = ReturnType<typeof rootReducer>;


const rootReducer = combineReducers({
    AppReducer,
    AuthorizationReducer,
});




export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


// Для быстрого извлечения из селектора , теперь можно указать только один тип ,
// например: const a = useAppSelector<ReducerType>(state => state.Reducer)
//если понял сотри комент и пользуйся
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;