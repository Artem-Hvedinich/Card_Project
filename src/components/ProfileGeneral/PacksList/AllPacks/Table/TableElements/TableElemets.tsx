import React from 'react';
import s from "../Table.module.css";
import {ActiveButtonsTable} from "../ActiveButtonsTable/ActiveButtonsTable";
import {OnePacksType} from "../../../../../../Types/PacksTypes";
import {useAppSelector} from "../../../../../../Store-Reducers/Store";
import {initialStateAuthorizationType} from "../../../../../../Store-Reducers/Auth-Reducer";
import {PATH} from "../../../../../../UtilsFunction/const-enum-path";
import {useNavigate} from "react-router-dom";

type TableElementsType = {
    el: OnePacksType
}

export const TableElemets = ({el}: TableElementsType) => {

    const stateAuth = useAppSelector<initialStateAuthorizationType>(state => state.AuthorizationReducer);
    const navigate = useNavigate();

    const onPackClick = (id: string) => navigate(PATH.cardsPack + `/:${id}`);

    return (
        <div className={s.elements_table_general_block}>
            <div className={s.li}>
                <span className={s.item} onClick={() => onPackClick(el._id)}>{el.name}</span>
                <span className={s.item}>{el.cardsCount}</span>
                <span className={s.item}>{el.updated.slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</span>
                <span className={s.item}>{el.user_name}</span>
                <span className={s.item}> <ActiveButtonsTable el={el} myId={stateAuth._id}/> </span>
            </div>
        </div>
    );
};