import React from 'react';
import {LoadingTable} from "../../Common/Loading/LoadingTable";
import {Item, PacksBlock, Table, TableItem} from "../../StylesComponents/CardsWrapper";
import s from "../CardsTable.module.css";
import {CardsInitialStateType} from "../../../Store-Reducers/Cards-Reducer";
import {ActiveCardButtonsTable} from "./ActiveCardsButtonsTable/ActiveCardButtonsTable";
import {useAppSelector} from "../../../Store-Reducers/Store";
import {initialStateAuthorizationType} from "../../../Store-Reducers/Auth-Reducer";

type CardsTableType = {
    stateCards: CardsInitialStateType
};

export const CardsTable = ({stateCards}: CardsTableType) => {

    const {_id} = useAppSelector<initialStateAuthorizationType>(state => state.AuthorizationReducer);

    const TableListAction = [
        {id: 1, name: "Question"},
        {id: 2, name: "Answer"},
        {id: 3, name: "Last Updated"},
        {id: 4, name: "Grade"},
        {id: 5, name: "Actions"},
    ];
    const TableList = [
        {id: 1, name: "Question"},
        {id: 2, name: "Answer"},
        {id: 3, name: "Last Updated"},
        {id: 4, name: "Grade"},
    ];
    const fiveStar = [0,1,2,3,4];

    return (
        <PacksBlock>
            <Table>
                <TableItem>
                    <Item>
                        {stateCards.packUserId === _id
                            ? TableListAction.map(el => <span key={el.id} className={s.name_column_one}>{el.name}</span>)
                            : TableList.map(el => <span key={el.id} className={s.name_column_one}>{el.name}</span>)
                        }
                    </Item>
                </TableItem>

                {stateCards.isFetching
                    ? <LoadingTable/>
                    : stateCards.cards.map(el => (
                        <div key={el._id} className={s.elements_table_general_block}>
                            <div className={s.li}>
                                <span className={s.item}>{el.question}</span>
                                <span className={s.item}>{el.answer}</span>
                                <span className={s.item}>
                                    {el.updated.slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}
                                </span>
                                <span className={s.item}>
                                    {fiveStar.map(num => <span key={el._id} className={`fa fa-star ${el.grade > num ? s.checked : ''}`}/>)}
                                </span>
                                <span className={s.item}> <ActiveCardButtonsTable myId={_id} el={el}/> </span>
                            </div>
                        </div>
                    ))
                }
            </Table>
        </PacksBlock>
    );
};