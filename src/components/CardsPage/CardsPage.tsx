import React, {useEffect} from 'react';
import {
    CardsPageWrapper,
    CardsWrapper,
    Item,
    PacksBlock,
    PaginationBlock,
    SearchBlock,
    Table,
    TableItem
} from '../StylesComponents/CardsWrapper';
import s from "./CardsTable.module.css";
import {useAppSelector, useTypedDispatch} from "../../Store-Reducers/Store";
import {
    CardsInitialStateType,
    getOnePageCardsAC,
    setCardsAnswerSearch,
    setCardsQuestionSearch
} from "../../Store-Reducers/Cards-Reducer";
import {TitleProfileWrapper} from "../StylesComponents/ProfileAndPacksWrapper";
import ImgArrow from "../../Assets/Vector1.png";
import {useNavigate} from "react-router-dom";
import {getCardsTC} from "../../Thunk's/CardsThunk";
import {NotAuthRedirect} from "../../UtilsFunction/RedirectFunction";
import styled from 'styled-components';
import {Pagination} from "../Common/Pagination";
import {LoadingTable} from "../Common/Loading/LoadingTable";
import {getOnePagePacksAC, PacksInitialStateType} from "../../Store-Reducers/Packs-Reducer";
import {SearchField} from "../StylesComponents/SearchInput";

const TableList = [
    {id: 1, name: "Question"},
    {id: 2, name: "Answer"},
    {id: 3, name: "Last Updated"},
    {id: 4, name: "Grade"},
];

export const CardsPage = NotAuthRedirect(() => {

    const stateCards = useAppSelector<CardsInitialStateType>(state => state.CardsReducer);
    const {packs} = useAppSelector<PacksInitialStateType>(state => state.PacksReducer);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCardsTC(stateCards.params.cardsPack_id));
    }, [dispatch, stateCards.params.cardsPack_id]);

    const onArrowClick = () => navigate(-1);
    const onPageChanged = (page: number) => dispatch(getOnePageCardsAC({page}));
    const onChangeWillDebounceQuestions = (title: string) => {
        dispatch(getOnePagePacksAC({page: 1}));
        dispatch(setCardsQuestionSearch({title}));
        dispatch(getCardsTC(stateCards.params.cardsPack_id));
    };
    const onChangeWillDebounceAnswers = (title: string) => {
        dispatch(getOnePagePacksAC({page: 1}));
        dispatch(setCardsAnswerSearch({title}));
        dispatch(getCardsTC(stateCards.params.cardsPack_id));
    };

    return (
        <CardsPageWrapper>
            <CardsWrapper>
                <NamePackBlock>
                    <Arrow onClick={onArrowClick}/>
                    <TitleProfileWrapper fontSz={1.5}>
                        {packs.find(el => el._id === stateCards.params.cardsPack_id)?.name}
                    </TitleProfileWrapper>
                </NamePackBlock>

                <SearchBlock>
                    <SearchField margin={"0"}
                                 width={'49%'}
                                 stateValue={stateCards.params.cardQuestion}
                                 onChangeWithDebounce={onChangeWillDebounceQuestions}
                                 placeholder={"Search Questions..."}
                    />
                    <SearchField margin={"0"}
                                 width={'49%'}
                                 stateValue={stateCards.params.cardAnswer}
                                 onChangeWithDebounce={onChangeWillDebounceAnswers}
                                 placeholder={"Search Answer..."}
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

                            {stateCards.cards.map(el => (
                                <div className={s.elements_table_general_block} key={el._id}>
                                    <div className={s.li}>
                                        <span className={s.item}>{el.question}</span>
                                        <span className={s.item}>{el.answer}</span>
                                        <span className={s.item}>{el.updated.slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</span>
                                        <span className={s.item}>{el.grade}</span>
                                    </div>
                                </div>
                            ))}
                        </Table>
                    }
                </PacksBlock>

                <PaginationBlock>
                    <Pagination portionSize={stateCards.params.pageCount}
                                totalItemsCount={stateCards.cardsTotalCount}
                                pageSize={stateCards.params.pageCount}
                                onPageChanged={onPageChanged}
                                currentPage={stateCards.params.page}/>
                </PaginationBlock>

            </CardsWrapper>
        </CardsPageWrapper>
    );
});


const NamePackBlock = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: flex-start;
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