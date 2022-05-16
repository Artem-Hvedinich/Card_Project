import React from 'react';
import {LoadingTable} from "../../Common/Loading/LoadingTable";
import {Item, PacksBlock, Table, TableItem} from "../../StylesComponents/CardsWrapper";
import s from "../CardsTable.module.css";
import {CardsInitialStateType} from "../../../Store-Reducers/Cards-Reducer";
import {ActiveCardButtonsTable} from "./ActiveCardsButtonsTable/ActiveCardButtonsTable";

const TableList = [
    {id: 1, name: "Question"},
    {id: 2, name: "Answer"},
    {id: 3, name: "Last Updated"},
    {id: 4, name: "Grade"},
    {id: 5, name: "Actions"},
];

type CardsTableType = {
    stateCards: CardsInitialStateType
};

export const CardsTable = ({stateCards}: CardsTableType) => {
    return (
        <PacksBlock>
            {stateCards.isFetching
                ? <LoadingTable/>
                : <Table>
                    <TableItem>
                        <Item>
                            {TableList.map(el => <span className={s.name_column_one}
                                                       key={el.id}>{el.name}</span>)}
                        </Item>
                    </TableItem>

                    {stateCards.cards.map(el => (
                        <div className={s.elements_table_general_block} key={el._id}>
                            <div className={s.li}>
                                <span className={s.item}>{el.question}</span>
                                <span className={s.item}>{el.answer}</span>
                                <span className={s.item}>{el.updated.slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</span>
                                <span className={s.item}>0 0 0 0 0</span>
                                <span className={s.item}> <ActiveCardButtonsTable el={el}/> </span>
                            </div>
                        </div>
                    ))}
                </Table>
            }
        </PacksBlock>
    );
};