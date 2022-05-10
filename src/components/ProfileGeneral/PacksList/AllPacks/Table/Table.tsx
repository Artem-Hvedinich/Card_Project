import React, {useEffect, useState} from 'react';
import s from "./Table.module.css";
import {PacksType, OnePacksType} from "../../../../../Types/PacksTypes";
import styled from "styled-components";
import {setFetchingPacksTableAC} from "../../../../../Store-Reducers/Packs-Reducer";
import {useTypedDispatch} from "../../../../../Store-Reducers/Store";
import {ActiveButtonsTable} from "./ActiveButtonsTable/ActiveButtonsTable";
import {detelePackTC} from "../../../../../Thunk's/PacksThunk";
import {LoadingTable} from "../../../../Common/Loading/LoadingTable";


type CardTableType = {
    itemPack: OnePacksType[]
    isFetching: boolean
}

const TableList = [
    {id: 1, name: "Name"},
    {id: 2, name: "Cards"},
    {id: 3, name: "Last Updated"},
    {id: 4, name: "Created by"},
    {id: 5, name: "Actions"},
];

export const CardTable = ({itemPack, isFetching}: CardTableType) => {

    const data: PacksType[] = [];

    const [localState, setLocalState] = useState<PacksType[]>(data);
    const dispatch = useTypedDispatch();

    useEffect(() => {
        if (itemPack.length !== 0) {
            itemPack.map(el => data.push({
                key: el._id,
                name: el.name,
                cards: el.cardsCount,
                last_updated: el.updated.slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`),
                created_by: "Some Long Name",
                // created_by: el.user_id,
            }));
            setLocalState(data);
        }
        dispatch(setFetchingPacksTableAC({isFetching: false}));
    }, [itemPack]);

    const onDeleteClick = (id: string) => {
        dispatch(detelePackTC(id))
    }
    const onEditClick = (id: string) => {

    }
    const onLearnClick = (id: string) => {

    }
    console.log(localState)

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
                    {localState.map(el =>
                        <div className={s.elements_table_general_block}>
                            <div key={el.key} className={s.li}>
                                <span className={s.item}>{el.name}</span>
                                <span className={s.item}>{el.cards}</span>
                                <span className={s.item}>{el.last_updated}</span>
                                <span className={s.item}>{el.created_by}</span>
                                <span className={s.item}>
                                <ActiveButtonsTable id={el.key}
                                                    onLearnClick={onLearnClick}
                                                    onEditClick={onEditClick}
                                                    onDeleteClick={onDeleteClick}/>
                            </span>
                            </div>
                        </div>
                    )
                    }
                </div>
            }
        </PacksBlock>
    );
};


const PacksBlock = styled.div`
  height: auto;
  overflow: hidden;
  min-height: 70%;
  max-height: 70%;
  width: 100%;
  margin-top: 2vw;
  box-shadow: -0.1vw -0.1vw 0.5vw #cbcbcb,
  0.1vw 0.1vw 0.5vw 0.1vw #cbcbcb;`
