import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "../PacksList.module.css";
import {ProfileWrapper} from "../../../StylesComponents/Wrapper";
import {useAppSelector, useTypedDispatch} from "../../../../Store-Reducers/Store";
import {CardsInitialStateType} from "../../../../Store-Reducers/Cards-Reducer";
import {getAllPacksTC, SearchPackTC} from "../../../../Thunk's/PacksThunk";
import {CardTable} from "./Table/Table";

export const AllPacks = () => {

    const stateCards = useAppSelector<CardsInitialStateType>(state => state.CardsReducer);
    const dispatch = useTypedDispatch();
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        dispatch(getAllPacksTC());
    },[])

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // if (error && error.trim() !== '') setError(null)
        if (e.ctrlKey || e.key === "Enter") {
            onClickHandler && onClickHandler()
        } else {
            setError('Error value')
        }
    }
    const onChangeHandler = (text: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setValue(text.currentTarget.value);
    }
    const onClickHandler = () => {
        dispatch(SearchPackTC(value));
        setValue('');
    };

    return (
        <ProfileWrapper>

            <div className={s.title}>Packs List</div>

            <div className={s.search_block}>
                <input className={s.search_input}
                       placeholder={"Search..."}
                       onChange={(e) => onChangeHandler(e)}
                       value={value}
                       onKeyPress={(e) => onKeyPress(e)}
                />
                {error}
                <button onClick={onClickHandler} className={s.button_add}>
                    Add new pack
                </button>
            </div>

            <CardTable itemPack={stateCards.cardPack}/>

        </ProfileWrapper>
    );
};
