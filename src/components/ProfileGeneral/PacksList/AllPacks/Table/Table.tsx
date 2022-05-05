import React, {useEffect, useState} from 'react';
import s from "./Table.module.css";
import {PacksType, OnePacksType} from "../../../../../Types/CardsTypes";
import styled from "styled-components";
import {Table, Space} from 'antd';


type CardTableType = {
    itemPack: OnePacksType[]
}

export const CardTable = ({itemPack}: CardTableType) => {

    const data: PacksType[] = [];
    console.log(data)

    const [localState, setLocalState] = useState<PacksType[]>(data);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        itemPack.map(el => data.push({
            key: el._id,
            name: el.name,
            cards: el.cardsCount,
            last_updated: el.updated,
            created_by: el.created,
        }));
        setLocalState(data);
        setLoading(false);
    },[itemPack]);


    const {Column} = Table;


    return (
        <PacksBlock>
            <Table dataSource={localState}
                   pagination={false}
                   size={"large"}
                   loading={loading}>

                <Column title="Name" dataIndex="name" key="name" width={"20%"} className={s.font_main}/>
                <Column title="Cards" dataIndex="cards" key="cards" width={"10%"} align={"center"} className={s.font}/>
                <Column title='Last Updated'
                        dataIndex='last_updated'
                        key='last_updated'
                        width={"25%"}
                        className={s.font}
                        align={"center"}
                        sorter={(a: { last_updated: string }, b: { last_updated: string }) =>
                            a.last_updated.length - b.last_updated.length}/>
                <Column title="Created by" dataIndex="created_by" key="created_by" width={"25%"} align={"center"} className={s.font}/>
                <Column
                    className={s.font}
                    title={'Actions'}
                    key={'actions'}
                    render={() => (
                        <Space size="middle">
                            <DeleteTableButton>
                                Delete
                            </DeleteTableButton>
                            <TableButton>
                                Edit
                            </TableButton>
                            <TableButton>
                                Learn
                            </TableButton>
                        </Space>
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
const TableButton = styled.div`
  cursor: pointer;
  background-color: #D7D8EF;
  padding: 5px 10px;
  color: #21268F;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
`;
const DeleteTableButton = styled.div`
  border: none;
  cursor: pointer;
  background-color: #F1453D;
  padding: 5px 10px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
`;
