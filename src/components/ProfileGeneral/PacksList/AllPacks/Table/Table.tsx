import React from 'react';
import s from "./Table.module.css";
import {OnePacksType} from "../../../../../Types/PacksTypes";
import {LoadingTable} from "../../../../Common/Loading/LoadingTable";
import {TableElemets} from "./TableElements/TableElemets";
import {PacksBlock} from '../../../../StylesComponents/CardsWrapper';

type CardTableType = {
    showEditModal: string
    setShowEditModal: (id: string) => void
    onEditClick: (id: string) => void
    itemPack: OnePacksType[]
    isFetching: boolean
};
const TableList = [
    {id: 1, name: "Name"},
    {id: 2, name: "Cards"},
    {id: 3, name: "Last Updated"},
    {id: 4, name: "Created by"},
    {id: 5, name: "Actions"},
];

export const CardTable = ({itemPack, isFetching, onEditClick, showEditModal, setShowEditModal}: CardTableType) => {
    return (
        <PacksBlock>
            {isFetching
                ? <LoadingTable/>
                : <div className={s.table}>
                    <div className={s.item_columns}>
                        <div className={s.item}>
                            {TableList.map(el => <span className={s.name_column_one} key={el.id}>{el.name}</span>)}
                        </div>
                    </div>
                    {itemPack.map(el => <TableElemets key={el._id}
                                                      el={el}
                                                      setShowEditModal={setShowEditModal}
                                                      onEditClick={onEditClick}
                                                      showEditModal={showEditModal}
                    />)}
                </div>
            }
        </PacksBlock>
    );
};