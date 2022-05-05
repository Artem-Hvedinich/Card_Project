import React from 'react';
import s from "../../PacksList.module.css";
import {OnePacksType} from "../../../../../Types/CardsTypes";

const TableList = [
    {id: 1, name: 'Name'},
    {id: 2, name: 'Cards'},
    {id: 3, name: 'Last Updated'},
    {id: 4, name: 'Created by'},
    {id: 5, name: 'Actions'},
];

type CardTableType = {
    itemPack: OnePacksType[]
}

export const CardTable = ({itemPack}: CardTableType) => {
    return (
        <div className={s.packs_block}>
            <div className={s.table}>
                <div className={s.item_columns}>
                    {TableList.map(el => <li className={s.name_columns_li} key={el.id}>{el.name}</li>)}
                </div>
                {itemPack.map(el =>
                    <div key={el._id} className={s.li}>
                        <span className={s.item}>{el.name}</span>
                        <span>{el.cardsCount}</span>
                        <span>{el.updated}</span>
                        <span>{el.created}</span>
                    </div>)
                }
            </div>
        </div>
    );
};
