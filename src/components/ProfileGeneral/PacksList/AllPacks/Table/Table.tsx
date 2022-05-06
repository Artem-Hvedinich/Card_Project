import React, {useEffect, useState} from 'react';
import s from "./Table.module.css";
import {PacksType, OnePacksType} from "../../../../../Types/PacksTypes";
import styled from "styled-components";
import {Table} from 'antd';
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
                created_by: el.created,
            }));
            setLocalState(data);
        }
        dispatch(setFetchingPacksTableAC({isFetching: false}));
    },[itemPack]);

    const onDeleteClick = (id: string) => {
        dispatch(detelePackTC(id))
    }
    const onEditClick = () => {

    }
    const onLearnClick = () => {

    }

    return (
        <PacksBlock>
            <Table dataSource={localState}
                   pagination={false}
                   size={"large"}
                   loading={isFetching}>

                <Table.Column title="Name" dataIndex="name" key="name" width={"20%"} className={s.font_main}/>
                <Table.Column title="Cards" dataIndex="cards" key="cards" width={"10%"} align={"center"} className={s.font}/>
                <Table.Column title='Last Updated'
                        dataIndex='last_updated'
                        key='last_updated'
                        width={"25%"}
                        className={s.font}
                        align={"center"}
                        sorter={(a: { last_updated: string }, b: { last_updated: string }) =>
                            a.last_updated.length - b.last_updated.length}/>
                <Table.Column title="Created by" dataIndex="created_by" key="created_by" width={"25%"} align={"center"} className={s.font}/>
                <Table.Column
                    className={s.font}
                    title={'Actions'}
                    key={'actions'}
                    render={(value, record: PacksType) => (
                            <ActiveButtonsTable record={record}
                                                onLearnClick={onLearnClick}
                                                onEditClick={onEditClick}
                                                onDeleteClick={onDeleteClick} />
                    )}
                />
            </Table>
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
