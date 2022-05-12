import React, {ChangeEvent, useEffect, useState} from 'react';
import {
    CardsPageWrapper,
    CardsWrapper,
    InputWrapper,
    Item,
    PacksBlock,
    SearchBlock,
    Table,
    TableItem
} from '../StylesComponents/CardsWrapper';
import s from "../ProfileGeneral/PacksList/AllPacks/Table/Table.module.css";
import {TableElemets} from "../ProfileGeneral/PacksList/AllPacks/Table/TableElements/TableElemets";
import {useAppSelector, useTypedDispatch} from "../../Store-Reducers/Store";
import {CardsInitialStateType} from "../../Store-Reducers/Cards-Reducer";
import {TitleProfileWrapper} from "../StylesComponents/ProfileAndPacksWrapper";
import ImgArrow from "../../Assets/Vector1.png";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {PATH} from "../../UtilsFunction/const-enum-path";

const TableList = [
    {id: 1, name: "Question"},
    {id: 2, name: "Answer"},
    {id: 3, name: "Last Updated"},
    {id: 4, name: "Grade"},
];

type CardsPageType = {
    packName: string
};

export const CardsPage = ({packName}: CardsPageType) => {

    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const {data} = useAppSelector<CardsInitialStateType>(state => state.CardsReducer);
    const dispatch = useTypedDispatch();

    // useEffect(() => {
    //     dispatch(getCardsTC(packId));
    // },[packId]);

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error && error.trim() !== '') setError(null);
        if (e.ctrlKey || e.key === "Enter") {
        } else {
            setError('Error value');
        }
    };

    const onChangeSearchHandler = (text: ChangeEvent<HTMLInputElement>) => {
        setError(null);
        setValue(text.currentTarget.value);
    }
    const onArrowClick = () => {
        return (PATH.packsList);
    };

    return (
        <CardsPageWrapper>
            <CardsWrapper>
                <NamePackBlock>
                    <Arrow onClick={onArrowClick}/>
                    <TitleProfileWrapper fontSz={1.5}>{packName}</TitleProfileWrapper>
                </NamePackBlock>

                <SearchBlock>
                    <InputWrapper placeholder={"Search..."}
                                  margin={"0"}
                                  width={'100%'}
                                  onChange={(e) => onChangeSearchHandler(e)}
                                  value={value}
                                  onKeyPress={(e) => onKeyPress(e)}
                    />
                </SearchBlock>

                <PacksBlock>
                    <Table>
                        <TableItem>
                            <Item>
                                {TableList.map(el => <span className={s.name_column_one} key={el.id}>{el.name}</span>)}
                            </Item>
                        </TableItem>

                        {data.cards.map((el: any) => <TableElemets el={el}
                                                                   setShowEditModal={() => {
                                                                   }}
                                                                   onEditClick={() => {
                                                                   }}
                                                                   showEditModal={''}
                        />)}
                    </Table>
                </PacksBlock>
            </CardsWrapper>
        </CardsPageWrapper>
    );
};


const NamePackBlock = styled.div`
  display: flex;
  width: 16%;
  align-items: center;
  justify-content: flex-end;
`;

const Arrow = styled.div`
  cursor: pointer;
  position: relative;
  background: url(${ImgArrow}) no-repeat;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  margin-right: 20px;
  transition: 1s all;
  
  &:hover {
    border-radius: 5px;
    border: 1px dashed #21268F;
  }
`;