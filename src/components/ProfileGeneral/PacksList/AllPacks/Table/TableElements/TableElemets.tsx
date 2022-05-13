import React from 'react';
import s from "../Table.module.css";
import {Input} from "../../../../../Common/Input/Input";
import {ActiveButtonsTable} from "../ActiveButtonsTable/ActiveButtonsTable";
import {OnePacksType} from "../../../../../../Types/PacksTypes";
import {useAppSelector} from "../../../../../../Store-Reducers/Store";
import {initialStateAuthorizationType} from "../../../../../../Store-Reducers/Auth-Reducer";
import {PATH} from "../../../../../../UtilsFunction/const-enum-path";
import {useNavigate} from "react-router-dom";

type TableElementsType = {
    el: OnePacksType
    showEditModal: string
    setShowEditModal: (id: string) => void
    onEditClick: (id: string) => void
}

export const TableElemets = ({el, showEditModal, onEditClick, setShowEditModal}: TableElementsType) => {

    const stateAuth = useAppSelector<initialStateAuthorizationType>(state => state.AuthorizationReducer);
    const navigate = useNavigate();

    const onPackClick = (id: string) => navigate(PATH.cardsPack + `/:${id}`);

    return (
        <div className={s.elements_table_general_block}>
            <div className={s.li}>
                {el._id === showEditModal
                    ? <Input _id={el._id} setShowEditModal={setShowEditModal}/>
                    : <span className={s.item} onClick={() => onPackClick(el._id)}>{el.name}</span>
                }
                <span className={s.item}>{el.cardsCount}</span>
                <span className={s.item}>{el.updated.slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</span>
                <span className={s.item}>{el.user_name}</span>
                <span className={s.item}>
                                <ActiveButtonsTable id={el._id}
                                                    myId={stateAuth._id}
                                                    userId={el.user_id}
                                                    onEditClick={onEditClick}
                                />
                            </span>
            </div>
        </div>
    );
};