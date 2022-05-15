import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppSelector, useTypedDispatch} from "../../../../Store-Reducers/Store";
import {CardTable} from "./Table/Table";
import {ProfileWrapper, TitleProfileWrapper} from '../../../StylesComponents/ProfileAndPacksWrapper';
import styled from "styled-components";
import {colors} from "../../../StylesComponents/Colors";
import {Pagination} from "../../../Common/Pagination";
import {AddPackModal} from "../../../ModalWindow/AddPackModal/AddPackModal";
import {InputWrapper, PaginationBlock, SearchBlock} from '../../../StylesComponents/CardsWrapper';
import {
    getOnePagePacksAC,
    searchPacksTableAC,
    PacksInitialStateType, setTitleForSearchAC
} from "../../../../Store-Reducers/Packs-Reducer";
import {getAllPacksTC} from "../../../../Thunk's/PacksThunk";
import useDebounce from "../../../../UtilsFunction/Hook/useDebounce";
import {SearchField} from "../../../StylesComponents/SearchInput";

type AllPacksType = {
    namePage: string
}

export const AllPacks = ({namePage}: AllPacksType) => {

    const statePack = useAppSelector<PacksInitialStateType>(state => state.PacksReducer);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const dispatch = useTypedDispatch();

    const addPackHandler = () => setShowAddModal(true);
    const onPageChanged = (page: number) => {
        dispatch(getOnePagePacksAC({page}));
        dispatch(getAllPacksTC());
    };

    const onChangeDebounceRequest = (title: string) => {
        dispatch(getOnePagePacksAC({page: 1}));
        dispatch(setTitleForSearchAC({title}));
        dispatch(getAllPacksTC());
    };

    return (
        <ProfileWrapper>
            {showAddModal
                ? <AddPackModal setShow={setShowAddModal}/>
                : <></>
            }
            <TitleProfileWrapper fontSz={1.5}>{namePage}</TitleProfileWrapper>

            <SearchBlock>
                <SearchField stateValue={statePack.params.packName}
                             placeholder={"Search pack..."}
                             onChangeWithDebounce={onChangeDebounceRequest}
                />
                <ButtonAddNewPack onClick={addPackHandler}>Add new pack</ButtonAddNewPack>
            </SearchBlock>

            <CardTable itemPack={statePack.packs} isFetching={statePack.isFetching}/>

            <PaginationBlock>
                <Pagination portionSize={10}
                            totalItemsCount={statePack.cardPacksTotalCount}
                            pageSize={statePack.params.pageCount}
                            onPageChanged={onPageChanged}
                            currentPage={statePack.params.page}/>
            </PaginationBlock>
        </ProfileWrapper>
    );
};


const ButtonAddNewPack = styled.button`
  width: 20%;
  height: 2vw;
  font-size: 0.8vw;
  background-color: ${colors.Blue};
  color: ${colors.WhiteColor};
  border-radius: 2vw;
  letter-spacing: 0.7px;
  border: none;
  cursor: pointer;`