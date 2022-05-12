import React, {ChangeEvent, useEffect, useState} from 'react';
import {
    CardsPageWrapper,
    CardsWrapper,
    InputWrapper,
    Item,
    PacksBlock,
    PaginationBlock,
    SearchBlock,
    Table,
    TableItem
} from '../StylesComponents/CardsWrapper';
import s from "./CardsTable.module.css";
import {useAppSelector, useTypedDispatch} from "../../Store-Reducers/Store";
import {CardsInitialStateType} from "../../Store-Reducers/Cards-Reducer";
import {TitleProfileWrapper} from "../StylesComponents/ProfileAndPacksWrapper";
import ImgArrow from "../../Assets/Vector1.png";
import {useNavigate} from "react-router-dom";
import {getCardsTC, getOnePageCardsTC} from "../../Thunk's/CardsThunk";
import {NotAuthRedirect} from "../../UtilsFunction/RedirectFunction";
import {Input} from "../Common/Input/Input";
import {ActiveButtonsTable} from "../ProfileGeneral/PacksList/AllPacks/Table/ActiveButtonsTable/ActiveButtonsTable";
import styled from 'styled-components';
import {Pagination} from "../Common/Pagination";
import {getOnePagePacksTC} from "../../Thunk's/PacksThunk";
import {LoadingTable} from "../Common/Loading/LoadingTable";

const TableList = [
    {id: 1, name: "Question"},
    {id: 2, name: "Answer"},
    {id: 3, name: "Last Updated"},
    {id: 4, name: "Grade"},
];

type CardsPageType = {
    packName: string
};

export const CardsPage = NotAuthRedirect(({packName}: CardsPageType) => {

    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const stateCards = useAppSelector<CardsInitialStateType>(state => state.CardsReducer);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const packId = document.location.hash.slice(13);

    useEffect(() => {
        dispatch(getCardsTC(packId.toString()));
    }, [packId]);

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
    const onArrowClick = () => navigate(-1);
    const onPageChanged = (numberPage: number) => dispatch(getOnePageCardsTC(packId, numberPage));

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
                    {stateCards.isFetching
                        ? <LoadingTable/>
                        : <Table>
                            <TableItem>
                                <Item>
                                    {TableList.map(el => <span className={s.name_column_one}
                                                               key={el.id}>{el.name}</span>)}
                                </Item>
                            </TableItem>

                            {stateCards.data.cards.map(el => (
                                <div className={s.elements_table_general_block} key={el._id}>
                                    <div className={s.li}>
                                        <span className={s.item}>{el.question}</span>
                                        <span className={s.item}>{el.answer}</span>
                                        <span
                                            className={s.item}>{el.updated.slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</span>
                                        <span className={s.item}>{el.grade}</span>
                                    </div>
                                </div>
                            ))}
                        </Table>
                    }
                </PacksBlock>

                <PaginationBlock>
                    <Pagination portionSize={stateCards.data.pageCount}
                                totalItemsCount={stateCards.data.cardsTotalCount}
                                pageSize={stateCards.data.pageCount}
                                onPageChanged={onPageChanged}
                                currentPage={stateCards.data.page}/>
                </PaginationBlock>

            </CardsWrapper>
        </CardsPageWrapper>
    );
});


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
  border: 1px dashed #ffffff;

  &:hover {
    border-radius: 5px;
    border: 1px dashed #21268F;
  }
`;