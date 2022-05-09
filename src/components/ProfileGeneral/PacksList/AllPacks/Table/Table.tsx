import React, {useEffect, useState} from 'react';
import s from "./Table.module.css";
import {PacksType, OnePacksType} from "../../../../../Types/PacksTypes";
import styled from "styled-components";
import {setFetchingPacksTableAC} from "../../../../../Store-Reducers/Packs-Reducer";
import {useTypedDispatch} from "../../../../../Store-Reducers/Store";
import {ActiveButtonsTable} from "./ActiveButtonsTable/ActiveButtonsTable";
import {detelePackTC} from "../../../../../Thunk's/PacksThunk";


type CardTableType = {
    itemPack: OnePacksType[]
    isFetching: boolean
}

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
                last_updated: el.updated,
                created_by: el.created.slice(0, 10),
            }));
            setLocalState(data);
        }
        dispatch(setFetchingPacksTableAC({isFetching: false}));
    }, [itemPack]);

    const onDeleteClick = (id: string) => {
        dispatch(detelePackTC(id))
    }
    const onEditClick = () => {

    }
    const onLearnClick = () => {

    }

    return (
        <PacksBlock>
            <ActiveButtonsTable  onLearnClick={onLearnClick}
                                onEditClick={onEditClick}
                                onDeleteClick={onDeleteClick}/>
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
