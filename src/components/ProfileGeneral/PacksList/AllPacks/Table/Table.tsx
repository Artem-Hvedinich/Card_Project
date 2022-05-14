import React from 'react';
import s from "./Table.module.css";
import {OnePacksType} from "../../../../../Types/PacksTypes";
import {LoadingTable} from "../../../../Common/Loading/LoadingTable";
import {TableElemets} from "./TableElements/TableElemets";
import {PacksBlock} from '../../../../StylesComponents/CardsWrapper';

type CardTableType = {
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

export const CardTable = ({itemPack, isFetching}: CardTableType) => {
    return (
        <PacksBlock>
            {isFetching
                ? <LoadingTable/>
                : <div className={s.table}>
                    <div className={s.item_columns}>
                        <div className={s.item_col_bg}>
                            {TableList.map(el => <span className={s.name_column_one} key={el.id}>{el.name}</span>)}
                        </div>
                    </div>
                    {itemPack.map(el => <TableElemets key={el._id} el={el}/>)}
                </div>
            }
        </PacksBlock>
    );
};